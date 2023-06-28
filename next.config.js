/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/github-pages',
  publicRuntimeConfig: {
      NEXT_PUBLIC_CURRENCY_API: process.env.NEXT_PUBLIC_CURRENCY_API,
      NEXT_PUBLIC_CURRENCY_API_KEY: process.env.NEXT_PUBLIC_CURRENCY_API_KEY,
  }
}

module.exports = nextConfig
