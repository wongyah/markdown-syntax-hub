import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/markdown-syntax-hub",
        destination: "https://markdown-syntax-hub.tcblabber.cn",
      },
    ];
  },
};
export default nextConfig;