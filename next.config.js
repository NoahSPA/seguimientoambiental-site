/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Para Netlify (sitio estático)
  },
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig

