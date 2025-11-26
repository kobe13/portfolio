import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    // Remove legacy JavaScript polyfills for modern browsers
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Target modern browsers only
  experimental: {
    optimizePackageImports: ["next/image", "html-react-parser"],
  },
  images: {
    qualities: [75, 85],
  },
  // Turbopack configuration
  turbopack: {},
};

export default nextConfig;
