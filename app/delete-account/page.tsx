import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal-article";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Delete your account",
  description:
    "How to delete your Tunelingo account and data — in the app or by email, without the app installed — including what is deleted and what is retained.",
  path: "/delete-account",
});

const markdown = fs.readFileSync(
  path.join(process.cwd(), "app", "delete-account", "DELETE_ACCOUNT.md"),
  "utf8",
);

export default function DeleteAccountPage() {
  return <LegalArticle markdown={markdown} />;
}
