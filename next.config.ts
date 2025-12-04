import type { NextConfig } from 'next';

const nextConfig: NextConfig = {};

module.exports = {
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
  },
};

export default nextConfig;
