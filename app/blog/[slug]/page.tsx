import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticle } from "@/components/blog-article";
import { EmailSignup } from "@/components/email-signup";
import { FaqAccordion } from "@/components/faq-accordion";
import { StoreLink } from "@/components/store-link";
import { SITE } from "@/content/site";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import type { Campaign } from "@/lib/storeLinks";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  jsonLdScript,
} from "@/lib/structured-data";

// Only slugs from generateStaticParams are served; anything else 404s.
// Drafts are excluded there, so a draft slug typed into the URL is a
// 404 in production, not a rendered page.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: { absolute: post.title },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: SITE.name,
      locale: "en_US",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const campaign: Campaign = `blog-${post.slug}`;

  const jsonLd: unknown[] = [
    blogPostingJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", url: `${SITE.url}/` },
      { name: "Blog", url: `${SITE.url}/blog` },
      { name: post.h1, url: `${SITE.url}/blog/${post.slug}` },
    ]),
  ];
  if (post.faq) jsonLd.push(faqPageJsonLd(post.faq));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />

      <article className="mx-auto max-w-[720px] px-7 pb-10 pt-[72px]">
        <nav aria-label="Breadcrumb" className="text-[13px] text-text-5">
          <Link href="/" className="transition-colors hover:text-text-3">
            Home
          </Link>
          <span aria-hidden="true"> / </span>
          <Link href="/blog" className="transition-colors hover:text-text-3">
            Blog
          </Link>
        </nav>

        <h1 className="mt-5 font-serif text-[clamp(30px,8vw,38px)] font-bold leading-[1.12] text-pretty md:text-[42px]">
          {post.h1}
        </h1>
        <p className="mt-4 text-[13px] text-text-5">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
          {post.updatedAt !== post.publishedAt && (
            <>
              {" "}
              · Updated{" "}
              <time dateTime={post.updatedAt}>
                {formatPostDate(post.updatedAt)}
              </time>
            </>
          )}
        </p>

        <div className="mt-8">
          <BlogArticle markdown={post.body} />
        </div>

        {post.faq && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold leading-[1.25]">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <FaqAccordion faqs={post.faq} />
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl font-bold leading-[1.25]">
              Related posts
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="text-[16px] font-semibold text-cyan hover:text-cyan-hover"
                  >
                    {rel.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Email capture leads, store link is secondary (SEO plan §10). */}
        <div className="mt-14 rounded-panel border border-surface-border bg-surface px-8 py-9">
          <h2 className="text-[21px] font-bold">
            Learn with the music you love 🎧
          </h2>
          <p className="mt-2 text-[15px] leading-[1.6] text-text-3">
            New languages, new genres and learning tips, straight to your
            inbox. No spam, just bangers.
          </p>
          <div className="mt-5">
            <EmailSignup campaign={campaign} />
          </div>
        </div>

        <p className="mt-6 text-[15px] leading-[1.6] text-text-3">
          Ready to try it? Tunelingo is free to start on the{" "}
          <StoreLink
            platform="appstore"
            campaign={campaign}
            className="font-semibold text-cyan hover:text-cyan-hover"
          >
            App Store
          </StoreLink>{" "}
          and{" "}
          <StoreLink
            platform="play"
            campaign={campaign}
            className="font-semibold text-cyan hover:text-cyan-hover"
          >
            Google Play
          </StoreLink>
          .
        </p>
      </article>
    </>
  );
}
