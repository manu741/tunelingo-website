import { readdirSync, readFileSync } from "node:fs";
import { basename, join } from "node:path";
import matter from "gray-matter";

/**
 * File-based blog content: one markdown file per post in content/blog/,
 * frontmatter validated at load time. A malformed post fails the build
 * with a named error; a silently broken post must never ship.
 *
 * The link graph (relatedPosts) is decided in docs/SEO_PLAN.md §5 and
 * written into frontmatter by hand. Nothing here infers relations.
 */

export type BlogFaq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  /** <title> tag, under 60 chars. */
  title: string;
  /** On-page H1, may differ from title. */
  h1: string;
  /** Meta description, 150-160 chars. */
  description: string;
  /** YYYY-MM-DD */
  publishedAt: string;
  /** YYYY-MM-DD; falls back to publishedAt. */
  updatedAt: string;
  targetKeyword: string;
  /** Draft posts are excluded from build, index and sitemap. */
  draft: boolean;
  faq?: BlogFaq[];
  /** Slugs from the SEO plan's linking map, rendered in order. */
  relatedPosts?: string[];
  /** Markdown body. Headings start at ##; the h1 field owns the page. */
  body: string;
};

const BLOG_DIR = join(process.cwd(), "content", "blog");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function fail(file: string, message: string): never {
  throw new Error(`Blog post "${file}": ${message}`);
}

function requireString(
  file: string,
  data: Record<string, unknown>,
  field: string,
): string {
  const value = data[field];
  if (typeof value !== "string" || value.trim() === "") {
    fail(file, `missing required frontmatter field "${field}"`);
  }
  return value.trim();
}

function requireDate(file: string, field: string, value: string): string {
  if (!DATE_RE.test(value) || Number.isNaN(Date.parse(value))) {
    fail(file, `"${field}" must be a valid YYYY-MM-DD date, got "${value}"`);
  }
  return value;
}

function parsePost(file: string, raw: string): BlogPost {
  const { data, content } = matter(raw);

  const slug = requireString(file, data, "slug");
  const expectedSlug = basename(file, ".md");
  if (slug !== expectedSlug) {
    fail(file, `frontmatter slug "${slug}" must match the filename`);
  }

  const publishedAt = requireDate(
    file,
    "publishedAt",
    requireString(file, data, "publishedAt"),
  );
  const updatedAt =
    data.updatedAt === undefined
      ? publishedAt
      : requireDate(file, "updatedAt", requireString(file, data, "updatedAt"));

  if (data.draft !== undefined && typeof data.draft !== "boolean") {
    fail(file, `"draft" must be true or false`);
  }

  let faq: BlogFaq[] | undefined;
  if (data.faq !== undefined) {
    if (!Array.isArray(data.faq) || data.faq.length === 0) {
      fail(file, `"faq" must be a non-empty list of { q, a } entries`);
    }
    faq = data.faq.map((entry: Record<string, unknown>, i: number) => {
      if (
        typeof entry?.q !== "string" ||
        entry.q.trim() === "" ||
        typeof entry?.a !== "string" ||
        entry.a.trim() === ""
      ) {
        fail(file, `faq entry ${i + 1} needs non-empty "q" and "a"`);
      }
      return { q: entry.q.trim(), a: entry.a.trim() };
    });
  }

  let relatedPosts: string[] | undefined;
  if (data.relatedPosts !== undefined) {
    if (
      !Array.isArray(data.relatedPosts) ||
      data.relatedPosts.some((s) => typeof s !== "string" || s.trim() === "")
    ) {
      fail(file, `"relatedPosts" must be a list of slugs`);
    }
    relatedPosts = data.relatedPosts.map((s: string) => s.trim());
  }

  const body = content.trim();
  if (body === "") fail(file, "body is empty");
  if (/^#\s/m.test(body)) {
    fail(file, "body contains an H1; headings start at ## (h1 is frontmatter)");
  }
  if (/!\[\s*\]\(/.test(body)) {
    fail(file, "an image is missing alt text; every image must describe itself");
  }

  const title = requireString(file, data, "title");
  const description = requireString(file, data, "description");
  if (title.length > 60) {
    console.warn(`[blog] "${file}": title is ${title.length} chars, aim for under 60`);
  }
  if (description.length < 140 || description.length > 170) {
    console.warn(
      `[blog] "${file}": description is ${description.length} chars, aim for 150-160`,
    );
  }

  return {
    slug,
    title,
    h1: requireString(file, data, "h1"),
    description,
    publishedAt,
    updatedAt,
    targetKeyword: requireString(file, data, "targetKeyword"),
    draft: data.draft === true,
    faq,
    relatedPosts,
    body,
  };
}

let cache: BlogPost[] | null = null;

function loadAll(): BlogPost[] {
  if (cache) return cache;
  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) =>
    parsePost(f, readFileSync(join(BLOG_DIR, f), "utf8")),
  );

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) {
      throw new Error(`Duplicate blog slug "${post.slug}"`);
    }
    seen.add(post.slug);
  }

  cache = posts;
  return posts;
}

/** Non-draft posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return loadAll()
    .filter((p) => !p.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** A single non-draft post; undefined for unknown or draft slugs. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

/** "2026-08-28" -> "August 28, 2026", timezone-stable for static builds. */
export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Resolves a post's relatedPosts slugs to live posts. Unknown or draft
 * slugs are skipped with a build-log warning rather than an error, so a
 * post may list cluster siblings that ship after it (SEO plan §5 rule 6).
 */
export function getRelatedPosts(post: BlogPost): BlogPost[] {
  if (!post.relatedPosts) return [];
  return post.relatedPosts.flatMap((slug) => {
    const related = getPostBySlug(slug);
    if (!related) {
      console.warn(
        `[blog] "${post.slug}": related post "${slug}" is unknown or draft, skipping`,
      );
      return [];
    }
    return [related];
  });
}
