import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Essential configuration for production
  reactStrictMode: true,
  
  // Optimize images (we use emojis, not Image components)
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint strict mode
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: true,
  },
};

export default nextConfig;
