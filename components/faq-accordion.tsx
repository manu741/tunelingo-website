"use client";

import { useState } from "react";
import { FAQS } from "@/content/site";

export function FaqAccordion() {
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col gap-2.5">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className="overflow-hidden rounded-[18px] border border-surface-border bg-surface"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left"
            >
              <span className="flex-1 text-base font-semibold">{faq.q}</span>
              <span
                aria-hidden="true"
                className={`flex-none text-xl leading-[0.6] text-accent transition-transform duration-250 ${
                  isOpen ? "translate-y-[3px] rotate-180" : "-translate-y-[3px]"
                }`}
              >
                ⌄
              </span>
            </button>
            {/* Always in the DOM, toggled with `hidden`: crawlers and AI
                assistants only see answer text that ships in the initial
                HTML, and the FAQ is the page's main AEO asset. */}
            <div
              id={`faq-answer-${i}`}
              hidden={!isOpen}
              className="px-6 pb-[22px] text-[15px] leading-[1.65] text-text-3"
            >
              {faq.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
