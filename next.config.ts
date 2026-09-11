import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essential configuration for production
  reactStrictMode: true,
  
  // Optimize images (we use emojis, not Image components)
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
