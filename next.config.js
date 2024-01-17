/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/public/html/index.html",
      destination: "/pages/api/myfile.js",
    },
  ],
};

module.exports = nextConfig;
