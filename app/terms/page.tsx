import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the Tunelingo app and website: accounts, free credits and subscriptions, your songs, acceptable use and liability.",
  path: "/terms",
});

const h2 = "mt-10 font-serif text-2xl font-bold text-text";
const p = "mt-3";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-7 pb-10 pt-[72px] text-[15.5px] leading-[1.75] text-legal">
      <h1 className="font-serif text-[42px] font-bold leading-[1.12] text-text">
        Terms of Service
      </h1>
      <p className="mt-3.5 text-sm text-text-5">
        Effective date: [July 21, 2026]
      </p>
      <p className="mt-6">
        These terms are an agreement between you and Dombyte Studio, [address],
        the Netherlands (“Tunelingo”, “we”). By creating an account or using
        the Tunelingo app or website, you agree to them.
      </p>

      <h2 className={h2}>1. The service</h2>
      <p className={p}>
        Tunelingo generates original AI-composed songs with lyrics in the
        language you’re learning, plus karaoke playback, translations and
        flashcards. Song generation uses AI: results vary, and occasional
        imperfect lyrics, translations or audio are part of the deal.
        Available languages, genres and features may change over time.
      </p>

      <h2 className={h2}>2. Your account</h2>
      <p className={p}>
        You must be at least [13/16] years old. Keep your credentials secure,
        you’re responsible for activity on your account. Provide accurate
        information and one account per person, please.
      </p>

      <h2 className={h2}>3. Free content, credits &amp; subscriptions</h2>
      <p className={p}>
        A sample song is free without an account, and new accounts receive one
        free song credit, no payment method required. Beyond that, songs cost
        credits, available as one-off purchases or through a subscription. All
        payments are processed by Apple’s App Store or Google Play under their
        terms; subscriptions renew and are cancelled through your store
        account settings. Refunds follow the store’s refund policy. Credits
        have no cash value and unused free credits may expire [after 12
        months].
      </p>

      <h2 className={h2}>4. Your songs</h2>
      <p className={p}>
        Songs generated for you are yours to play, download and share for
        personal, non-commercial use. Commercial use (streaming platforms,
        advertising, resale) requires our prior written permission. We may
        retain generated songs to provide the service and improve generation
        quality.
      </p>

      <h2 className={h2}>5. Acceptable use</h2>
      <p className={p}>
        Don’t misuse the service: no attempts to generate unlawful, hateful or
        infringing content; no reverse-engineering, scraping or reselling; no
        circumventing credit limits. We may suspend accounts that break these
        rules.
      </p>

      <h2 className={h2}>6. Our IP</h2>
      <p className={p}>
        The Tunelingo app, brand, design and technology belong to Dombyte
        Studio or its licensors. These terms give you a personal,
        non-transferable licence to use the app, nothing more.
      </p>

      <h2 className={h2}>7. Disclaimer &amp; liability</h2>
      <p className={p}>
        The service is provided “as is”. To the maximum extent permitted by
        law, we disclaim implied warranties and our total liability to you is
        limited to the amount you paid us in the [12] months before the claim.
        Nothing in these terms limits liability that cannot lawfully be
        limited.
      </p>

      <h2 className={h2}>8. Termination</h2>
      <p className={p}>
        You can delete your account at any time in the app. We may suspend or
        terminate accounts for breach of these terms, with notice where
        reasonably possible. Sections 4 to 9 survive termination.
      </p>

      <h2 className={h2}>9. Governing law &amp; changes</h2>
      <p className={p}>
        These terms are governed by the laws of the Netherlands; disputes go
        to the courts of [city], the Netherlands, unless consumer law says
        otherwise. We may update these terms, material changes will be
        announced in the app or by email before they apply. Questions:{" "}
        <a
          href="mailto:legal@tunelingo.app"
          className="text-cyan hover:text-cyan-hover"
        >
          [legal@tunelingo.app]
        </a>
        .
      </p>
    </article>
  );
}
