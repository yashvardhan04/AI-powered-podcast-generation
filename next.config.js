/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "heygen.com",
      },
      {
        protocol: "https",
        hostname: "**.heygen.com",
      },
      {
        protocol: "https",
        hostname: "heygen.ai",
      },
      {
        protocol: "https",
        hostname: "**.heygen.ai",
      },
    ],
  },
};

module.exports = nextConfig;