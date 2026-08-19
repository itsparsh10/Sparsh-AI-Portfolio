/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/rigel",
        destination: "/rigel",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

