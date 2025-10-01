/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig