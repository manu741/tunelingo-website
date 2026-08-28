import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Research and practical guides on learning languages with music: why lyrics stick, how to build vocabulary with songs, and how Tunelingo compares to other apps.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-[820px] px-7 pb-24 pt-[72px]">
      <p className="text-xs font-bold uppercase tracking-[3px] text-cyan">
        Tunelingo
      </p>
      <h1 className="mt-3.5 font-serif text-[clamp(30px,8vw,38px)] font-bold leading-[1.12] md:text-[42px]">
        Blog
      </h1>
      <p className="mt-4 max-w-[560px] text-[16px] leading-[1.65] text-text-3">
        Learning languages with music: what the research says, how to make
        vocabulary stick, and how the apps compare.
      </p>

      {posts.length === 0 ? (
        <p className="mt-12 text-[15px] text-text-4">
          First posts are on the way. Check back soon.
        </p>
      ) : (
        <div className="mt-12 flex flex-col gap-[18px]">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-card border border-surface-border bg-surface p-7"
            >
              <time
                dateTime={post.publishedAt}
                className="text-[13px] text-text-5"
              >
                {formatPostDate(post.publishedAt)}
              </time>
              <h2 className="mt-2 text-[21px] font-bold leading-[1.3]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-cyan"
                >
                  {post.h1}
                </Link>
              </h2>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-text-3">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
