import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, SITE } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto flex max-w-[1140px] flex-wrap gap-12 px-7 pb-10 pt-14">
        <div className="flex-[1_1_260px]">
          <Link href="/" className="flex w-fit items-center gap-2.5 text-text">
            <Image
              src="/logo-icon.png"
              alt=""
              width={30}
              height={30}
              className="rounded-lg"
            />
            <span className="font-display text-[19px] font-bold">
              Tunelingo
            </span>
          </Link>
          <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-text-4">
            {SITE.tagline}
          </p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div
            key={column.heading}
            className="flex flex-[0_1_160px] flex-col gap-3 text-sm"
          >
            <div className="text-xs font-bold uppercase tracking-[2px] text-text-5">
              {column.heading}
            </div>
            {column.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-2 transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1140px] px-7 pb-9 text-[13px] text-text-6">
        © 2026 Tunelingo · Dombyte Studio. All rights reserved.
      </div>
    </footer>
  );
}
