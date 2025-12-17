import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Uncomment and set this if deploying to a subpath like username.github.io/repo-name
  // basePath: "/wp-statistics-landing",
};

export default nextConfig;
