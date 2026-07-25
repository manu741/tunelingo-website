import { FAQS, SITE } from "@/content/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.company,
    url: SITE.url,
    logo: `${SITE.url}/logo-icon.png`,
    brand: { "@type": "Brand", name: SITE.name },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  };
}

export function softwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    description: SITE.description,
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS, Android",
    author: { "@type": "Organization", name: SITE.company, url: SITE.url },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Serialize JSON-LD for a <script type="application/ld+json"> tag (XSS-guarded per Next docs). */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
