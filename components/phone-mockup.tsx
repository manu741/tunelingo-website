import Image from "next/image";
import { HAS_HERO_SCREENSHOT } from "@/content/site";

// Karaoke-style skeleton shown until a real app screenshot lands at
// public/screenshots/hero.png (then flip HAS_HERO_SCREENSHOT in content/site.ts).
function ScreenPlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-[radial-gradient(ellipse_at_top,rgba(139,124,248,0.22),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.14),transparent_60%)] px-8">
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/logo-icon.png"
          alt=""
          width={64}
          height={64}
          className="rounded-2xl"
        />
        <span className="font-display text-lg font-bold text-text">
          Tunelingo
        </span>
      </div>
      <div className="flex w-full flex-col gap-3.5" aria-hidden="true">
        <div className="h-2.5 w-3/5 rounded-pill bg-white/10" />
        <div className="bg-cta h-2.5 w-4/5 rounded-pill opacity-80" />
        <div className="h-2.5 w-2/3 rounded-pill bg-white/10" />
        <div className="h-2.5 w-3/4 rounded-pill bg-white/10" />
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto flex-none">
      <div
        className="pointer-events-none absolute -inset-[60px] bg-[radial-gradient(ellipse_at_center,rgba(139,124,248,0.18),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative h-[620px] w-[300px] rounded-[44px] border border-white/[0.14] bg-[#0b0b16] p-[11px] shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
        <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#0d0d17]">
          {HAS_HERO_SCREENSHOT ? (
            <Image
              src="/screenshots/hero.png?v=2"
              alt="Tunelingo app showing a freshly generated song ready to play"
              width={278}
              height={598}
              preload
              className="h-full w-full object-cover"
            />
          ) : (
            <ScreenPlaceholder />
          )}
        </div>
      </div>
    </div>
  );
}
