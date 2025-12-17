import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only use basePath in production for GitHub Pages
  basePath: isProd ? "/wp-statistics-landing" : "",
};

export default nextConfig;
