import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Tunelingo is built by Dombyte Studio in the Netherlands: language learning through original AI-composed songs, because nobody forgets a chorus.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-[760px] px-7 pb-10 pt-20">
      <p className="text-xs font-bold uppercase tracking-[3px] text-cyan">
        About
      </p>
      <h1 className="mt-4 font-serif text-[clamp(34px,9vw,46px)] font-bold leading-[1.1] text-pretty">
        Nobody forgets a chorus
      </h1>
      <p className="mt-[22px] text-lg leading-[1.7] text-text-2">
        You can’t remember the vocabulary list from Tuesday, but you can still
        sing a jingle from 2009. That gap, between what we’re told to memorize
        and what our brains actually keep, is why Tunelingo exists.
      </p>

      <h2 className="mt-13 font-serif text-[28px] font-bold">
        Why we built it
      </h2>
      <p className="mt-3.5 text-base leading-[1.75] text-text-3">
        Language apps got very good at streaks and very bad at joy. Drills work
        until they don’t; most people quit not because learning is hard, but
        because it’s boring. Music fixes the boring part for free, melody,
        rhythm and rhyme are memory tools humans have used for thousands of
        years. We just added the part where the song is written for{" "}
        <em>you</em>.
      </p>

      <h2 className="mt-11 font-serif text-[28px] font-bold">
        What Tunelingo does
      </h2>
      <p className="mt-3.5 text-base leading-[1.75] text-text-3">
        Tell us what language you’re learning, what music you love, and roughly
        where your level is. Our AI composes an original song, real melody,
        real hooks, with lyrics pitched exactly to you. You sing along
        karaoke-style, tap words you don’t know, and those words come back as
        flashcards timed by spaced repetition. Thirteen languages to learn, and
        every lyric translated into your own.
      </p>

      <h2 className="mt-11 font-serif text-[28px] font-bold">Who we are</h2>
      <p className="mt-3.5 text-base leading-[1.75] text-text-3">
        We’re Dombyte Studio, a small team based in the Netherlands. The name
        is a nod to the Domtoren, Utrecht’s medieval bell tower, the sound that
        has carried over the city for centuries. Bells, songs, language: it all
        comes back to things worth remembering by ear. Tunelingo started from
        something personal: I always wanted to learn Greek and could never find
        a way to do it that I actually enjoyed. So I built the thing I wished
        existed.
      </p>

      <div className="bg-panel mt-14 rounded-3xl border border-accent/30 p-9 text-center">
        <p className="font-serif text-[26px] font-bold">
          Hear your first song
        </p>
        <p className="mt-2 text-[15px] text-text-2">
          Free sample, no account needed.
        </p>
        <Link
          href="/#download"
          className="bg-cta mt-5 inline-block rounded-pill px-7 py-[13px] text-[15px] font-bold text-cta-text transition-[filter] hover:brightness-110"
        >
          Get the app
        </Link>
      </div>
    </article>
  );
}
