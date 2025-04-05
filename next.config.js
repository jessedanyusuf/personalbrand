/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.selar.co',
      },
    ],
  },
  // Set strict mode to ensure consistent rendering
  reactStrictMode: true,
}

module.exports = nextConfig;
