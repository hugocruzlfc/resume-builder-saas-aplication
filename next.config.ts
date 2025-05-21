import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4owjhzcemon6pkhg.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
