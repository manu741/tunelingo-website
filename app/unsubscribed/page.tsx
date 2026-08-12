import type { Metadata } from "next";
import Link from "next/link";

// Landing target for the email-list unsubscribe redirect; not a page anyone
// should find via search, so keep it out of the index (and out of sitemap.ts).
export const metadata: Metadata = {
  title: "You’re unsubscribed",
  robots: { index: false, follow: false },
};

export default function UnsubscribedPage() {
  return (
    <div className="mx-auto max-w-[620px] px-7 pb-24 pt-24">
      <div className="rounded-[22px] border border-surface-border bg-surface px-[26px] py-10 text-center sm:px-10">
        <h1 className="font-serif text-[clamp(30px,7vw,40px)] font-bold leading-[1.15]">
          You're unsubscribed
        </h1>
        <p className="mt-4 text-[17px] leading-[1.7] text-text-2">
          Your email has been removed from the list. You can sign up again
          anytime.
        </p>
        <p className="mt-3 text-sm leading-[1.6] text-text-3">
          Changed your mind? The{" "}
          <Link href="/#email" className="text-cyan hover:text-cyan-hover">
            signup form
          </Link>{" "}
          is right on the homepage.
        </p>
        <Link
          href="/"
          className="bg-cta mt-8 inline-block rounded-pill px-[26px] py-3.5 text-[15px] font-bold text-cta-text transition-[filter] hover:brightness-110"
        >
          Back to Tunelingo
        </Link>
      </div>
    </div>
  );
}
