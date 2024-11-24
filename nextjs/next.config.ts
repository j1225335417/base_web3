import type { NextConfig } from 'next';

// next.config.js
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // 确保这个设置放在配置的根级别
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_WALLET_CONNECT: process.env.NEXT_PUBLIC_WALLET_CONNECT,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ezek.io',
      },
      { protocol: 'https', hostname: 'phanta-bear-nft.matrixlabs.org' },
    ],
  },
};

export default nextConfig;
