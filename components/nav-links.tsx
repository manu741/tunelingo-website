"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/content/site";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-6 text-sm font-medium md:flex">
      {NAV_LINKS.map((link) => {
        const active = !link.href.includes("#") && pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              active
                ? "text-text"
                : "text-text-2 transition-colors hover:text-text"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
