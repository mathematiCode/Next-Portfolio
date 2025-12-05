import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
  },
};

export default nextConfig;
