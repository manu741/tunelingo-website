import { FAQS, SITE } from "@/content/site";
import type { BlogFaq, BlogPost } from "@/lib/blog";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.company,
    url: SITE.url,
    logo: `${SITE.url}/logo-icon.png`,
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
    author: {
      "@type": "Organization",
      name: SITE.name,
      legalName: SITE.company,
      url: SITE.url,
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  };
}

export function faqPageJsonLd(faqs: readonly BlogFaq[] = FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function blogPostingJsonLd(post: BlogPost) {
  const url = `${SITE.url}/blog/${post.slug}`;
  const dombyte = {
    "@type": "Organization",
    name: SITE.company,
    url: SITE.url,
  };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: dombyte,
    publisher: {
      ...dombyte,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo-icon.png`,
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Serialize JSON-LD for a <script type="application/ld+json"> tag (XSS-guarded per Next docs). */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
