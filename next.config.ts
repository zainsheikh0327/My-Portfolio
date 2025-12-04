import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",           // REQUIRED for GitHub Pages
  images: {
    unoptimized: true,        // Required for static export
    domains: ["images.unsplash.com"],  // REQUIRED for remote images
  },
  reactStrictMode: true,
  trailingSlash: true,        // Recommended for static export URLs
};

export default nextConfig;
