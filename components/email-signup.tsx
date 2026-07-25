"use client";

import { useState } from "react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (/.+@.+\..+/.test(email.trim())) {
      // TODO: wire to an email service provider (Mailchimp, Buttondown, …)
      setSent(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-cyan/10 px-5 py-4 text-[15px] font-semibold text-cyan">
        You’re in! First verse coming to your inbox soon. 🎤
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
            setError(false);
          }}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-pill border border-white/[0.14] bg-white/6 px-5 py-3.5 text-[15px] text-text outline-none placeholder:text-text-4 focus:border-accent"
        />
        <button
          type="submit"
          className="bg-cta cursor-pointer whitespace-nowrap rounded-pill px-[26px] py-3.5 text-[15px] font-bold text-cta-text transition-[filter] hover:brightness-110"
        >
          Sign up
        </button>
      </div>
      {error && (
        <p className="mt-2.5 text-[13px] text-[#f0a6a6]">
          That doesn’t look like an email address yet.
        </p>
      )}
    </form>
  );
}
