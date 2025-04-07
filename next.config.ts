import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname:
          "bafybeifhqoqwtxiultgggtnnbkysqwh73yml467djeas2cbpgkmtwpemxa.ipfs.dweb.link",
      },
      {
        protocol: "https",
        hostname: "static.drip.trade",
      },
    ],
  },
};

export default nextConfig;
