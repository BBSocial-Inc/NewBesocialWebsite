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

export default nextConfig;
