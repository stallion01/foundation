/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['mail.chackos.com']
    }
  }
}

module.exports = nextConfig 