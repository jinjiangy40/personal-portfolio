import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: deploy to any public host without ChatGPT Sites auth.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
