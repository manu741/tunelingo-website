"use client";

import Link from "next/link";
import { useState } from "react";

const ENDPOINT =
  "https://maldfunzxmrorsgyexam.supabase.co/functions/v1/email-list";

const ERROR_MESSAGES = {
  invalid_email: "That doesn’t look like an email address yet.",
  rate_limited: "Too many attempts — please wait a bit and try again.",
  email_send_failed:
    "We couldn’t send the confirmation email. Please try again.",
  internal_error: "Something went wrong on our end. Please try again.",
} as const;

type ErrorKey = keyof typeof ERROR_MESSAGES;

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<ErrorKey | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    if (!/.+@.+\..+/.test(email.trim())) {
      setError("invalid_email");
      return;
    }

    // Honeypot: uncontrolled on purpose — bots fill it through the DOM,
    // which would never reach React state. Whatever they typed gets sent.
    const honeypot =
      (
        event.currentTarget.elements.namedItem(
          "website",
        ) as HTMLInputElement | null
      )?.value ?? "";

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          sourcePage: window.location.pathname,
          utmCampaign:
            new URLSearchParams(window.location.search).get("utm_campaign") ??
            undefined,
          locale: navigator.language,
          website: honeypot,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        return;
      }

      const body: { error?: string } = await res.json().catch(() => ({}));
      setError(
        body.error === "invalid_request"
          ? "invalid_email"
          : body.error === "rate_limited" || body.error === "email_send_failed"
            ? body.error
            : "internal_error",
      );
      setStatus("idle");
    } catch {
      setError("internal_error");
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-cyan/10 px-5 py-4 text-[15px] font-semibold text-cyan">
        Almost done — check your inbox and click the confirmation link. 🎤
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex gap-2.5">
        <label htmlFor="signup-email" className="sr-only">
          Email address
        </label>
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError(null);
          }}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-pill border border-white/[0.14] bg-white/6 px-5 py-3.5 text-[15px] text-text outline-none placeholder:text-text-4 focus:border-accent"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-cta cursor-pointer whitespace-nowrap rounded-pill px-[26px] py-3.5 text-[15px] font-bold text-cta-text transition-[filter] hover:brightness-110 disabled:cursor-default disabled:opacity-60 disabled:hover:brightness-100"
        >
          {status === "sending" ? "Signing up…" : "Sign up"}
        </button>
      </div>
      {/* Honeypot — off-screen rather than display:none (some bots skip
          hidden fields). Humans never see or tab into it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
        <label htmlFor="signup-website">Website</label>
        <input
          id="signup-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>
      {error && (
        <p className="mt-2.5 text-[13px] text-[#f0a6a6]" role="alert">
          {ERROR_MESSAGES[error]}
        </p>
      )}
      <p className="mt-2.5 text-[13px] leading-[1.6] text-text-4">
        Get early-access news about Tunelingo — learning languages through
        music. We’ll send you an email to confirm. Read our{" "}
        <Link href="/privacy" className="text-cyan hover:text-cyan-hover">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
