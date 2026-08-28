# Claude Code task: blog infrastructure

Repo: tunelingo.app landing page (Next.js, App Router)

## Context

The SEO plan (`SEO_PLAN.md`) calls for a content cluster of blog posts that rank for
informational and comparison keywords and link down to the homepage. None of that
infrastructure exists yet. The site is currently 6 static routes.

This task builds the plumbing only. No post content is written here.

Read `SEO_PLAN.md` and `UTM_CONVENTIONS.md` in this repo before starting. Match the
existing patterns in `lib/storeLinks.ts`, `lib/analytics.ts` and `components/email-signup.tsx`
rather than introducing new ones.

## Goal

`/blog` index and `/blog/{slug}` post pages, driven by markdown files, statically
generated, with correct per-page SEO metadata and structured data.

## Requirements

### 1. Content source

File-based markdown or MDX in `content/blog/{slug}.md(x)`. No CMS, no database.

Frontmatter, all required unless marked optional:

```yaml
title: "Duolingo Alternatives: 7 Apps Worth Switching To"   # <title>, under 60 chars
h1: "Duolingo alternatives that are actually worth it"      # may differ from title
description: "..."                                          # meta description, 150-160 chars
slug: "duolingo-alternatives"
publishedAt: "2026-08-28"
updatedAt: "2026-08-28"        # optional, falls back to publishedAt
targetKeyword: "duolingo alternatives"
draft: false                   # true excludes from build, index and sitemap
faq:                           # optional
  - q: "Is Duolingo still worth using?"
    a: "..."
```

Fail the build loudly on a missing required field or a duplicate slug. A silently
malformed post is worse than a broken build.

### 2. Rendering, non-negotiable

**Static generation via `generateStaticParams`.** Post content must be present in the
raw HTML response, with no client-side fetching or hydration required to read it.

Verify with `curl https://tunelingo.app/blog/{slug} | grep` for a sentence from the body.
Several AI crawlers do not execute JavaScript, and AEO is a primary goal of this content.
This is the single most important requirement in the task.

### 3. Per-page metadata

Each post exports Next.js `metadata`:

- `title` from frontmatter
- `description` from frontmatter
- `alternates.canonical` as an absolute URL, `https://tunelingo.app/blog/{slug}`
- `openGraph`: title, description, `type: "article"`, `publishedTime`, `url`
- `twitter`: `summary_large_image`

Exactly one `<h1>` per page, rendered from the `h1` frontmatter field, not from the
markdown body. Body headings start at `##`.

The `/blog` index needs its own title and description. It is not a post.

### 4. Structured data

`BlogPosting` JSON-LD on every post: headline, description, datePublished, dateModified,
author and publisher as Dombyte Studio, mainEntityOfPage.

If `faq` is present in frontmatter, render a visible FAQ section **and** emit `FAQPage`
JSON-LD. The homepage FAQ schema work was just done, so reuse that implementation rather
than writing a second one.

`BreadcrumbList` JSON-LD: Home > Blog > Post.

All answer text must be in the initial HTML. If the FAQ uses an accordion, the content
still has to be in the markup when collapsed, not injected on expand.

### 5. Sitemap

Posts auto-append to `sitemap.xml` with `lastmod` from `updatedAt`. `draft: true` posts
are excluded. Add `/blog` itself. Do not hand-maintain this list.

### 6. Conversion elements

Per `SEO_PLAN.md` §10, informational posts lead with email capture, not the store link.

- Embed the existing `EmailSignup` component in every post, after the body content.
- Add `blog-{slug}` to the `Campaign` union type so `EmailSignup` and `StoreLink` both
  receive it. `UTM_CONVENTIONS.md` documents this naming.
- Include one `StoreLink` in the post footer, secondary to the email capture.
- Do not hand-write store URLs. Use `lib/storeLinks.ts`.

### 7. Internal linking

Markdown links to internal pages must render as real `<a href>` anchors, crawlable in the
static HTML. Do not route them through a click handler.

Add a "Related posts" slot that takes an explicit list of slugs from frontmatter, or omit
the section when absent. Do not build automatic tag-based or algorithmic relations. The
link graph is decided in `SEO_PLAN.md`, not inferred.

### 8. Index page

`/blog` lists non-draft posts, newest first: `h1`, `description`, date, link. No
pagination, no categories, no tags, no search. There will be fewer than ten posts for
some time.

### 9. Images

`next/image`. Alt text required on every image, and the build should fail without it.
Prefer WebP.

## Acceptance criteria

- [ ] `curl` on a post URL returns the body text, the h1, and the FAQ answers in raw HTML
- [ ] `sitemap.xml` includes `/blog` and every non-draft post with correct `lastmod`
- [ ] Draft posts 404 in production and are absent from index and sitemap
- [ ] Exactly one `<h1>` per post page
- [ ] Canonical is an absolute URL and self-referencing
- [ ] `BlogPosting` and `BreadcrumbList` validate in Google's Rich Results Test
- [ ] `FAQPage` validates on a post that has `faq` frontmatter
- [ ] An unknown slug returns 404, not a 500 or an empty page
- [ ] A post missing a required frontmatter field fails the build
- [ ] `EmailSignup` fires `email_signup` with `utm_campaign: blog-{slug}`
- [ ] Internal markdown links render as plain crawlable anchors
- [ ] Build passes with no new type errors

## Out of scope

- Writing any post content. Ship with one placeholder marked `draft: true`.
- Changes to the homepage, pricing, or any existing route
- Comments, tags, categories, search, pagination, author pages
- RSS. Worth doing later, not now.
- Analytics changes beyond adding the new campaign strings
