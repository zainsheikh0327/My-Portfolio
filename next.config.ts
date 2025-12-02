import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export",           // REQUIRED for GitHub Pages
  images: {
    unoptimized: true,        // GitHub Pages cannot optimize images
  },
  reactStrictMode: true,
  trailingSlash: true,        // Recommended for static export
};

export default nextConfig;
