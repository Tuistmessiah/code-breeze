/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.agilitypr.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'craftohtml.themezaa.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
