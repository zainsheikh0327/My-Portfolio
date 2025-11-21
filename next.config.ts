import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow optimization via Vercel
    unoptimized: false,
  },
  // No static export — Vercel handles routing dynamically
  reactStrictMode: true,
  trailingSlash: false,
};

export default nextConfig;
