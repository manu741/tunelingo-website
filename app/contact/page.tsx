import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Support",
  description:
    "Get in touch with the Tunelingo team: support for bugs, accounts and billing, plus press, partnerships and feature ideas.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[760px] px-7 pb-10 pt-20">
      <p className="text-xs font-bold uppercase tracking-[3px] text-cyan">
        Contact &amp; support
      </p>
      <h1 className="mt-4 font-serif text-[clamp(34px,9vw,46px)] font-bold leading-[1.1]">
        We’re all ears 🎧
      </h1>
      <p className="mt-5 text-[17px] leading-[1.7] text-text-2">
        Found a bug, got a feature idea, or a song that came out weird? Tell
        us, we read everything.
      </p>

      <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
        <div className="rounded-[20px] border border-surface-border bg-surface p-[26px]">
          <h2 className="text-xs font-bold uppercase tracking-[2px] text-text-5">
            Support
          </h2>
          <p className="mt-2.5 text-[17px] font-bold">
            <a
              href="mailto:support@tunelingo.app"
              className="text-cyan hover:text-cyan-hover"
            >
              [support@tunelingo.app]
            </a>
          </p>
          <p className="mt-2 text-sm leading-[1.6] text-text-3">
            Bugs, account issues, billing and credits. We reply within [2
            business days].
          </p>
        </div>
        <div className="rounded-[20px] border border-surface-border bg-surface p-[26px]">
          <h2 className="text-xs font-bold uppercase tracking-[2px] text-text-5">
            Everything else
          </h2>
          <p className="mt-2.5 text-[17px] font-bold">
            <a
              href="mailto:hello@tunelingo.app"
              className="text-cyan hover:text-cyan-hover"
            >
              [hello@tunelingo.app]
            </a>
          </p>
          <p className="mt-2 text-sm leading-[1.6] text-text-3">
            Press, partnerships, feature ideas, or just to say hi in any of our
            13 languages.
          </p>
        </div>
      </div>

      <div className="mt-[18px] rounded-[20px] border border-surface-border bg-surface p-[26px]">
        <h2 className="text-[15px] font-bold">Quick answers</h2>
        <p className="mt-2 text-sm leading-[1.7] text-text-3">
          Billing, levels, languages and free credits are covered in the{" "}
          <Link href="/#faq" className="text-cyan hover:text-cyan-hover">
            FAQ
          </Link>
          . Subscriptions are managed through your{" "}
          <span className="text-[#c8c8d2]">App Store</span> or{" "}
          <span className="text-[#c8c8d2]">Google Play</span> account settings.
        </p>
      </div>
    </div>
  );
}
