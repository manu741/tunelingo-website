import type { Metadata } from "next";
import { SITE } from "@/content/site";

/**
 * Per-page metadata: unique title/description, canonical URL and matching
 * Open Graph / Twitter tags (nested metadata objects replace the layout's
 * wholesale, so each page carries the full set).
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const ogTitle = title ? `${title} · ${SITE.name}` : SITE.title;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_US",
      url: path,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
