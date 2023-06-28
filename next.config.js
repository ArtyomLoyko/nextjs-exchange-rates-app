/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CURRENCY_API_KEY: process.env.NEXT_PUBLIC_CURRENCY_API_KEY,
    NEXT_PUBLIC_CURRENCY_API: process.env.NEXT_PUBLIC_CURRENCY_API
  },

 // Add basePath
  basePath: '/github-pages',

}

module.exports = nextConfig
