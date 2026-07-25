import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal-article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Tunelingo collects, uses and protects your data: what we store to make your songs and track your learning, and the rights you have over it.",
  path: "/privacy",
});

const markdown = fs.readFileSync(
  path.join(process.cwd(), "app", "privacy", "PRIVACY_POLICY.md"),
  "utf8",
);

export default function PrivacyPage() {
  return <LegalArticle markdown={markdown} />;
}
