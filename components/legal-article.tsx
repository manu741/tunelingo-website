import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { SITE } from "@/content/site";

const linkClass = "text-cyan hover:text-cyan-hover";

function MarkdownLink({
  href = "",
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  if (href.startsWith(SITE.url)) {
    return (
      <Link href={href.slice(SITE.url.length) || "/"} className={linkClass}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-serif text-[clamp(30px,8vw,38px)] font-bold leading-[1.12] text-text md:text-[42px]">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-9 font-serif text-2xl font-bold leading-[1.25] text-text">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 text-[17px] font-bold text-text">{children}</h3>
  ),
  p: ({ children }) => <p className="mt-3.5">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-3.5 list-disc space-y-2 pl-5 marker:text-text-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-3.5 list-decimal space-y-2 pl-5 marker:text-text-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-[#d8d8e0]">{children}</strong>
  ),
  a: ({ href, children }) => (
    <MarkdownLink href={href}>{children}</MarkdownLink>
  ),
  hr: () => <hr className="mt-12 border-white/8" />,
  code: ({ children }) => (
    <code className="rounded-md bg-white/7 px-1.5 py-0.5 font-mono text-[13px] text-[#d8d8e0]">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-3.5 border-l-2 border-accent/40 pl-4 text-text-3">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="mt-5 overflow-x-auto rounded-card border border-surface-border">
      <table className="w-full min-w-[560px] border-collapse text-left text-[14px] leading-[1.55]">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-surface-border bg-white/[0.04] px-4 py-2.5 text-xs font-bold uppercase tracking-[1px] text-text-4">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-surface-border px-4 py-2.5 align-top">
      {children}
    </td>
  ),
};

export function LegalArticle({ markdown }: { markdown: string }) {
  return (
    <article className="mx-auto max-w-[720px] px-7 pb-10 pt-[72px] text-[15.5px] leading-[1.75] text-legal">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
