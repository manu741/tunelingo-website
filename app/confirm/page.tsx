import type { Metadata } from "next";
import { ConfirmClient } from "./confirm-client";

// Landing target for Supabase auth emails; not a page anyone should find via
// search, so keep it out of the index (and out of sitemap.ts).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ConfirmPage() {
  return <ConfirmClient />;
}
