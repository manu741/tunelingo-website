import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/components/nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[rgba(3,6,19,0.82)] backdrop-blur-[14px]">
      <nav className="mx-auto flex max-w-[1140px] items-center gap-7 px-7 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 text-text">
          <Image
            src="/logo-icon.png"
            alt=""
            width={34}
            height={34}
            className="rounded-[9px]"
          />
          <span className="font-display text-[21px] font-bold tracking-[0.2px]">
            Tunelingo
          </span>
        </Link>
        <div className="flex-1" />
        <NavLinks />
        <Link
          href="/#download"
          className="bg-cta whitespace-nowrap rounded-pill px-5 py-2.5 text-sm font-bold text-cta-text transition-[filter] hover:brightness-110"
        >
          Get the app
        </Link>
      </nav>
    </header>
  );
}
