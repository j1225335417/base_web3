import type { NextConfig } from 'next';
// next.config.js
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // 确保这个设置放在配置的根级别
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ezek.io',
      },
    ],
  },
};

export default nextConfig;
