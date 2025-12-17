import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages deployment at username.github.io/repo-name
  basePath: "/wp-statistics-landing",
};

export default nextConfig;
