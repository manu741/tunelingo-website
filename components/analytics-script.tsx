import Script from "next/script";

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const UMAMI_HOST =
  process.env.NEXT_PUBLIC_UMAMI_HOST ?? "https://cloud.umami.is";

/**
 * Umami pageview tracking (visitors, visits, views, bounce rate, visit
 * duration). Custom events like store_click go through lib/analytics.ts
 * instead and do not need this script.
 *
 * Renders nothing until NEXT_PUBLIC_UMAMI_WEBSITE_ID is set, so local
 * dev stays untracked. data-domains keeps Vercel preview deployments
 * and localhost out of the production stats.
 */
export function AnalyticsScript() {
  if (!UMAMI_WEBSITE_ID) return null;
  return (
    <Script
      src={`${UMAMI_HOST}/script.js`}
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains="tunelingo.app,www.tunelingo.app"
      strategy="afterInteractive"
    />
  );
}
