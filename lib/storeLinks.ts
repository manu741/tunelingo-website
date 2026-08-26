/**
 * Single source of truth for app store URLs. Never hand-write a
 * play.google.com or apps.apple.com URL anywhere else in the codebase.
 *
 * Campaign naming scheme (lowercase, hyphenated, no spaces):
 *
 * | Page                           | campaign          |
 * | ------------------------------ | ----------------- |
 * | /                              | homepage          |
 * | /pricing                       | pricing           |
 * | /learn-{language}-with-music   | {language}-page   |
 * | /blog/{slug}                   | blog-{slug}       |
 */
export type Campaign =
  | "homepage"
  | "pricing"
  | `${string}-page`
  | `blog-${string}`;

export const PLAY_PACKAGE_ID = "com.dombyte.tunelingo";
export const APP_STORE_ID = "6793957173";

/**
 * Play Store URL with an install referrer. Google Play passes the
 * `referrer` query parameter through to the installed app, where the
 * Install Referrer API reads it to join web visit to install.
 *
 * The utm string must be a single encoded value: an unencoded `&`
 * would split the referrer and the app would only receive the first
 * utm pair.
 */
export function playStoreUrl(campaign: Campaign): string {
  const referrer = encodeURIComponent(
    `utm_source=tunelingo.app&utm_medium=web&utm_campaign=${campaign}`,
  );
  return `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE_ID}&referrer=${referrer}`;
}

/**
 * App Store URL with an Apple campaign token. The `ct` value surfaces
 * in App Store Connect acquisition reports.
 */
export function appStoreUrl(campaign: Campaign): string {
  return `https://apps.apple.com/app/id${APP_STORE_ID}?ct=${encodeURIComponent(campaign)}&mt=8`;
}
