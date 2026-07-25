import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Tunelingo collects, uses and protects your data: what we store to make your songs and track your learning, and the rights you have over it.",
  path: "/privacy",
});

const h2 = "mt-10 font-serif text-2xl font-bold text-text";
const p = "mt-3";
const strong = "font-bold text-[#d8d8e0]";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[720px] px-7 pb-10 pt-[72px] text-[15.5px] leading-[1.75] text-legal">
      <h1 className="font-serif text-[42px] font-bold leading-[1.12] text-text">
        Privacy Policy
      </h1>
      <p className="mt-3.5 text-sm text-text-5">
        Effective date: [July 21, 2026] · Applies to the Tunelingo mobile app
        and tunelingo.app website.
      </p>
      <p className="mt-6">
        Tunelingo is operated by Dombyte Studio, [legal form], registered at
        [address], the Netherlands (“we”, “us”). This policy explains what data
        we collect, why, and what rights you have. Short version: we collect
        what we need to make your songs and track your learning, we don’t sell
        your data, and you can delete your account at any time.
      </p>

      <h2 className={h2}>1. Data we collect</h2>
      <p className={p}>
        <strong className={strong}>Account data.</strong> Email address,
        display name and password (stored hashed), or your Apple/Google
        sign-in identifier.
      </p>
      <p className={p}>
        <strong className={strong}>Learning data.</strong> The languages you
        learn, your native language, level-check results, genres you pick,
        words you tap, flashcard progress and streaks.
      </p>
      <p className={p}>
        <strong className={strong}>Generated content.</strong> The songs and
        lyrics created for you, and the settings used to create them.
      </p>
      <p className={p}>
        <strong className={strong}>Purchase data.</strong> Your credit balance
        and subscription status. Payments run entirely through Apple’s App
        Store or Google Play, we never see or store your card details.
      </p>
      <p className={p}>
        <strong className={strong}>Device &amp; usage data.</strong> Device
        type, OS version, app version, language settings, crash logs and
        anonymized usage events that help us fix bugs and improve the app.
      </p>

      <h2 className={h2}>2. How we use it</h2>
      <p className={p}>
        To generate your songs and translations; to tune lyrics to your level;
        to schedule your flashcard reviews; to maintain your account, credits
        and subscriptions; to fix crashes and improve features; and, if you
        opted in, to send you product updates and learning tips by email. You
        can unsubscribe from emails at any time with one click.
      </p>

      <h2 className={h2}>3. AI processing</h2>
      <p className={p}>
        Songs, lyrics and translations are generated using third-party AI
        services ([provider names]). We send them only what’s needed for
        generation (e.g. your target language, level and genre choice), never
        your email or identity. Generated songs are stored so you can replay
        them.
      </p>

      <h2 className={h2}>4. Sharing</h2>
      <p className={p}>
        We do not sell your personal data. We share data only with service
        providers who help us run Tunelingo (hosting, analytics, email
        delivery, AI generation, listed at [link to subprocessor list]), under
        contracts that limit what they may do with it, and where required by
        law.
      </p>

      <h2 className={h2}>5. Retention &amp; deletion</h2>
      <p className={p}>
        We keep your data while your account is active. Delete your account in
        Settings → Account → Delete, or email us, your personal data is
        removed within [30 days], except records we must keep by law.
        Anonymized statistics may be retained.
      </p>

      <h2 className={h2}>6. Your rights</h2>
      <p className={p}>
        Depending on where you live (including under the GDPR), you can
        request access to, correction of, export of, or deletion of your
        personal data, object to certain processing, and lodge a complaint
        with your local data-protection authority. Contact us at
        [privacy@tunelingo.app] to exercise any of these.
      </p>

      <h2 className={h2}>7. Children</h2>
      <p className={p}>
        Tunelingo is not directed at children under [13/16]. We do not
        knowingly collect data from them; if you believe a child has created
        an account, contact us and we will delete it.
      </p>

      <h2 className={h2}>8. Changes</h2>
      <p className={p}>
        We’ll post any changes to this policy here and, for material changes,
        notify you in the app or by email before they take effect.
      </p>

      <h2 className={h2}>9. Contact</h2>
      <p className={p}>
        Dombyte Studio, [address], the Netherlands. Privacy questions:{" "}
        <a
          href="mailto:privacy@tunelingo.app"
          className="text-cyan hover:text-cyan-hover"
        >
          [privacy@tunelingo.app]
        </a>
        .
      </p>
    </article>
  );
}
