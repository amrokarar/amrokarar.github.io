import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: `next build` writes plain HTML/CSS/JS to ./out
  // cacheComponents / partialPrefetching removed: they enable PPR, which can't run in export mode
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
