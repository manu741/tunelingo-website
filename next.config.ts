import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com", pathname: "/w40/**" },
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
