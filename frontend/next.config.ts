import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      // Allow images from any WordPress site (you can restrict this to your specific domain later)
      {
        protocol: 'https',
        hostname: '**',
      }
    ],
  },
};

export default nextConfig;

