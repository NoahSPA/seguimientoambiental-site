/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Para Netlify (sitio estático)
  },
  output: 'export', // Para generar sitio estático
  trailingSlash: true,
  distDir: 'out', // Carpeta de salida para Netlify
}

module.exports = nextConfig

