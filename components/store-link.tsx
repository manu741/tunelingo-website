"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";
import { appStoreUrl, playStoreUrl, type Campaign } from "@/lib/storeLinks";

/**
 * The only way to render an outbound store link. Builds the href via
 * lib/storeLinks so every link carries the campaign tag, and logs a
 * store_click event without blocking navigation.
 */
export function StoreLink({
  platform,
  campaign,
  className,
  children,
}: {
  platform: "play" | "appstore";
  campaign: Campaign;
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const href =
    platform === "play" ? playStoreUrl(campaign) : appStoreUrl(campaign);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        track("store_click", {
          page: pathname,
          utm_campaign: campaign,
          platform,
        });
      }}
    >
      {children}
    </a>
  );
}
