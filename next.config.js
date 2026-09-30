/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized:
      process.env.NEXT_IMAGE_UNOPTIMIZED === 'true' ||
      process.env.NEXT_IMAGE_UNOPTIMIZED === '1' ||
      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === 'true' ||
      process.env.IMAGE_UNOPTIMIZED === 'true',
  },
};

module.exports = nextConfig;
