function AppleLogo() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 384 512"
      fill="#0a0a14"
      className="flex-none"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      className="flex-none"
      aria-hidden="true"
    >
      <path
        fill="#EA4335"
        d="M105.7 12.9c-8.5-4.5-18.3-4.1-26.3.3l223.9 223.9 74.6-74.6z"
      />
      <path
        fill="#FBBC04"
        d="M456.6 222.3l-83.4-46.4-79.4 79.4 79.4 79.4 83.6-46.5c23.7-13.2 23.7-52.3-.2-65.9z"
      />
      <path
        fill="#4285F4"
        d="M79.4 498.8c8 4.4 17.8 4.8 26.3.3l271.6-150.9-74.6-74.6z"
      />
      <path
        fill="#34A853"
        d="M53.1 13.2C46 18.6 41.6 27.1 41.6 38v436c0 10.9 4.4 19.4 11.5 24.8l229.4-242.8z"
      />
    </svg>
  );
}

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dombyte.tunelingo";

// The App Store badge is a placeholder until the iOS app is live —
// intentionally not a link.
export function StoreBadges({
  variant = "hero",
}: {
  variant?: "hero" | "panel";
}) {
  const playClasses =
    variant === "panel"
      ? "border border-white/20 bg-[rgba(3,6,19,0.5)]"
      : "border border-white/[0.16] bg-white/6";

  return (
    <div
      className={`flex flex-wrap gap-3.5 ${variant === "panel" ? "justify-center" : ""}`}
    >
      <div
        title="Coming soon"
        className="flex min-w-[170px] cursor-default items-center gap-3 rounded-[14px] bg-text px-[22px] py-2.5"
      >
        <AppleLogo />
        <span className="flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.4px] text-cta-text/65">
            Coming soon on the
          </span>
          <span className="text-[19px] font-bold leading-[1.15] text-cta-text">
            App Store
          </span>
        </span>
      </div>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex min-w-[170px] items-center gap-3 rounded-[14px] px-[22px] py-2.5 transition-colors hover:bg-white/10 ${playClasses}`}
      >
        <PlayLogo />
        <span className="flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.4px] text-text-3">
            Get it on
          </span>
          <span className="text-[19px] font-bold leading-[1.15] text-text">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}
