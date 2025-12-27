/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // basePath: '/nombre-de-tu-repo',
  // assetPrefix: '/nombre-de-tu-repo',
}

export default nextConfig
