import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "@/components/legal-article";

function BlogImage({ src, alt }: { src?: string | Blob; alt?: string }) {
  if (typeof src !== "string" || src === "") {
    throw new Error("Blog image has no src");
  }
  if (!alt) {
    throw new Error(`Blog image "${src}" is missing alt text`);
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={1440}
      height={810}
      sizes="(max-width: 780px) 100vw, 720px"
      className="mt-5 h-auto w-full rounded-card border border-surface-border"
    />
  );
}

const blogComponents: Components = {
  ...markdownComponents,
  // The page h1 comes from frontmatter; lib/blog rejects bodies with an
  // H1 at load time, this is the backstop.
  h1: () => {
    throw new Error("Blog post bodies must start headings at ##");
  },
  img: BlogImage,
};

/**
 * Renders a post body server-side so the full text is in the static
 * HTML. No remark-breaks here (unlike legal pages): blog markdown uses
 * standard paragraph semantics.
 */
export function BlogArticle({ markdown }: { markdown: string }) {
  return (
    <div className="text-[16px] leading-[1.75] text-text-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={blogComponents}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
