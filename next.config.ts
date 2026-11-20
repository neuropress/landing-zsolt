import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // webp already optimized; saves CDN requests + image quota
};

export default nextConfig;
