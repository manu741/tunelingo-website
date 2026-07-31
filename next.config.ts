import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com", pathname: "/w40/**" },
    ],
    // Screenshots use a ?v= query for cache busting when the file is
    // replaced in place; all other local images must be query-less.
    localPatterns: [
      { pathname: "/screenshots/**" },
      { pathname: "/**", search: "" },
    ],
  },
  async headers() {
    // The AASA file has no extension, so it needs an explicit content type;
    // iOS refuses to match universal links without application/json.
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
