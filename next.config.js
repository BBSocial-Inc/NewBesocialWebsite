/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: "/",
      destination: "/html/index.html",
    },
  ],
};

module.exports = nextConfig;

// rewrites: async () => [
//   {
//     source: "/",
//     destination: "/index.html",
//   },
// ],
