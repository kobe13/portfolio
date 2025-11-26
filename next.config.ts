import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Remove legacy JavaScript polyfills for modern browsers
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Target modern browsers only
  experimental: {
    optimizePackageImports: ["next/image"],
  },
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
