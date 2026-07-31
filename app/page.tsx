import type { Metadata } from "next";
import Image from "next/image";
import { EmailSignup } from "@/components/email-signup";
import { FaqAccordion } from "@/components/faq-accordion";
import { PhoneMockup } from "@/components/phone-mockup";
import { StoreBadges } from "@/components/store-badges";
import { FEATURES, LANGUAGES, PRICING, SITE, STEPS } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import {
  faqPageJsonLd,
  jsonLdScript,
  softwareAppJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  ...pageMetadata({
    description: SITE.description,
    path: "/",
  }),
  // Home <title> is exactly the brand name; `absolute` bypasses the layout's
  // title template. The tagline stays in description / og tags.
  title: { absolute: SITE.name },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript([softwareAppJsonLd(), faqPageJsonLd()]),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-[220px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(139,124,248,0.22),transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[160px] -right-[120px] h-[500px] w-[600px] bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.13),transparent_65%)]"
        />
        <div className="relative mx-auto flex max-w-[1140px] flex-wrap items-center gap-16 px-7 pb-24 pt-[84px]">
          <div className="min-w-[320px] flex-[1_1_480px]">
            <p className="inline-flex items-center gap-2 rounded-pill border border-cyan/25 bg-cyan/10 px-3.5 py-1.5 text-[13px] font-semibold text-cyan">
              <span
                aria-hidden="true"
                className="size-[7px] rounded-full bg-cyan"
              />
              Coming soon to iOS &amp; Android
            </p>
            <h1 className="mt-[22px] font-serif text-[clamp(34px,10vw,46px)] font-bold leading-[1.07] tracking-[-0.5px] text-pretty md:text-[56px]">
              Learn a language by{" "}
              <span className="text-gradient">singing it</span>.
            </h1>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.6] text-pretty text-text-3 md:text-[19px]">
              Tunelingo writes an original song in the language you’re
              learning, in a genre you actually love. Sing along
              karaoke-style, tap any word, and it sticks.
            </p>
            <div className="mt-8">
              <StoreBadges />
            </div>
            <p className="mt-4 text-sm text-text-4">
              Free sample song the moment you open it, no account, no card.
            </p>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* Languages strip */}
      <section className="border-y border-white/6 bg-white/[0.015]">
        <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-4 px-7 py-9 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[2px] text-text-5">
            Learn
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-2.5">
            {LANGUAGES.map((lang) => (
              <li
                key={lang.cc}
                className="inline-flex items-center gap-[9px] rounded-pill border border-white/8 bg-white/[0.045] py-1.5 pl-2 pr-[15px] text-[13px] text-[#c8c8d2]"
              >
                <Image
                  src={`https://flagcdn.com/w40/${lang.cc}.png`}
                  alt=""
                  width={22}
                  height={16}
                  className="h-4 w-[22px] rounded-[3px] object-cover"
                />
                {lang.name}
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-4">
            …with every lyric translated into{" "}
            <span className="font-semibold text-cyan">your own language</span>,
            all 13 supported as native languages too.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="mx-auto max-w-[1140px] scroll-mt-[90px] px-7 pb-10 pt-24"
      >
        <p className="text-xs font-bold uppercase tracking-[3px] text-cyan">
          How it works
        </p>
        <h2 className="mt-3.5 max-w-[600px] font-serif text-[clamp(28px,7vw,34px)] font-bold leading-[1.15] text-pretty md:text-[40px]">
          From “hola” to chorus in about a minute
        </h2>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-3.5 rounded-card border border-surface-border bg-surface p-7"
            >
              <div className="bg-[linear-gradient(135deg,rgba(139,124,248,0.2),rgba(45,212,191,0.2))] flex size-11 items-center justify-center rounded-[14px] font-serif text-xl font-bold text-text">
                {step.n}
              </div>
              <h3 className="text-[19px] font-bold">{step.title}</h3>
              <p className="text-[15px] leading-[1.6] text-text-3">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-[1140px] scroll-mt-[90px] px-7 pb-10 pt-24"
      >
        <p className="text-xs font-bold uppercase tracking-[3px] text-accent">
          Features
        </p>
        <h2 className="mt-3.5 max-w-[640px] font-serif text-[clamp(28px,7vw,34px)] font-bold leading-[1.15] text-pretty md:text-[40px]">
          Flashcards you’ll catch yourself humming
        </h2>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-[18px] rounded-card border border-surface-border bg-surface p-[26px]"
            >
              <div className="flex size-[42px] flex-none items-center justify-center rounded-[13px] border border-cyan/20 bg-cyan/10 text-lg font-bold text-cyan">
                {feature.glyph}
              </div>
              <div>
                <h3 className="text-[17px] font-bold">{feature.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-text-3">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-[1140px] scroll-mt-[90px] px-7 pb-10 pt-24"
      >
        <p className="text-xs font-bold uppercase tracking-[3px] text-cyan">
          Pricing
        </p>
        <h2 className="mt-3.5 font-serif text-[clamp(28px,7vw,34px)] font-bold leading-[1.15] text-pretty md:text-[40px]">
          Your first songs are on us
        </h2>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
          {PRICING.map((tier) => (
            <div
              key={tier.step}
              className={`flex flex-col gap-2.5 rounded-card border p-[30px] ${
                tier.highlighted
                  ? "border-accent/35 bg-[linear-gradient(180deg,rgba(139,124,248,0.12),rgba(45,212,191,0.06))]"
                  : "border-surface-border bg-surface"
              }`}
            >
              <div
                className={`text-xs font-bold uppercase tracking-[2px] ${
                  tier.highlighted ? "text-accent" : "text-text-5"
                }`}
              >
                {tier.step}
              </div>
              <h3 className="text-[21px] font-bold">{tier.title}</h3>
              <div
                className={`font-serif text-[34px] font-bold ${
                  tier.priceAccent ? "text-cyan" : "text-text"
                }`}
              >
                {tier.price}
              </div>
              <p className="text-[14.5px] leading-[1.6] text-text-3">
                {tier.body}
                {tier.hasEmailLink && (
                  <>
                    {" "}
                    <a
                      href="#email"
                      className="text-cyan hover:text-cyan-hover"
                    >
                      join the list
                    </a>{" "}
                    to hear first.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-[820px] scroll-mt-[90px] px-7 pb-10 pt-24"
      >
        <p className="text-xs font-bold uppercase tracking-[3px] text-accent">
          FAQ
        </p>
        <h2 className="mt-3.5 font-serif text-[clamp(28px,7vw,34px)] font-bold leading-[1.15] md:text-[40px]">
          Good questions
        </h2>
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </section>

      {/* Download + email signup */}
      <section
        id="download"
        className="mx-auto max-w-[1140px] scroll-mt-[90px] px-7 py-24"
      >
        <div className="bg-panel relative overflow-hidden rounded-panel border border-accent/30 px-10 py-[60px] text-center">
          <Image
            src="/logo-icon.png"
            alt=""
            width={64}
            height={64}
            className="mx-auto rounded-2xl"
          />
          <h2 className="mt-[22px] font-serif text-[clamp(28px,7vw,34px)] font-bold leading-[1.15] text-pretty md:text-[38px]">
            Your first song is waiting
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-base leading-[1.6] text-text-2">
            Tunelingo is coming to the App Store and Google Play, with a free
            sample song in the language you’re learning the moment you open it.
          </p>
          <div className="mt-7">
            <StoreBadges variant="panel" />
          </div>
        </div>

        <div
          id="email"
          className="mt-[22px] flex scroll-mt-[90px] flex-wrap items-center gap-8 rounded-panel border border-surface-border bg-surface px-10 py-11"
        >
          <div className="flex-[1_1_360px]">
            <h2 className="text-[21px] font-bold">Be first to hear it 🎧</h2>
            <p className="mt-2 text-[15px] leading-[1.6] text-text-3">
              New languages, new genres, launch pricing and learning tips,
              straight to your inbox. No spam, just bangers.
            </p>
          </div>
          <div className="min-w-0 flex-[1_1_380px]">
            <EmailSignup />
          </div>
        </div>
      </section>
    </>
  );
}
