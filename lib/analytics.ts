/**
 * Client-side analytics. All vendor wiring lives in this file only;
 * swapping or enabling a vendor must never touch call sites.
 *
 * Adapter selection, in order:
 * 1. `NEXT_PUBLIC_UMAMI_WEBSITE_ID` set: send events to Umami
 *    (cookieless, no consent banner needed). Optionally set
 *    `NEXT_PUBLIC_UMAMI_HOST` for a self-hosted instance; defaults to
 *    Umami Cloud.
 * 2. `NEXT_PUBLIC_ANALYTICS_DEBUG=1` or dev server: log to the console.
 * 3. Otherwise: no-op.
 */

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const UMAMI_HOST =
  process.env.NEXT_PUBLIC_UMAMI_HOST ?? "https://cloud.umami.is";
const CONSOLE_ADAPTER =
  process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "1" ||
  process.env.NODE_ENV === "development";

/**
 * Fire-and-forget event tracking. Never throws, never blocks
 * navigation, and no-ops during SSR: a failing analytics call must
 * never break a link.
 */
export function track(event: string, props?: Record<string, string>): void {
  try {
    if (typeof window === "undefined") return;

    if (UMAMI_WEBSITE_ID) {
      const body = JSON.stringify({
        type: "event",
        payload: {
          website: UMAMI_WEBSITE_ID,
          hostname: window.location.hostname,
          url: window.location.pathname + window.location.search,
          title: document.title,
          language: navigator.language,
          screen: `${window.screen.width}x${window.screen.height}`,
          referrer: document.referrer,
          name: event,
          data: props,
        },
      });
      // Deliberately not awaited. keepalive lets the request finish
      // even if the page navigates away.
      void fetch(`${UMAMI_HOST}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
      return;
    }

    if (CONSOLE_ADAPTER) {
      console.log("[analytics]", event, props ?? {});
    }
  } catch {
    // Swallow everything: analytics must never break the page.
  }
}
