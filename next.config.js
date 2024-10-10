/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Recommended for the `pages` directory, default in `app`.
  output: 'standalone',
  experimental: {
    scrollRestoration: true
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
