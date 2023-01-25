require('dotenv').config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATO_CMS_TOKEN: process.env.DATO_CMS_TOKEN,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.path = false;
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
