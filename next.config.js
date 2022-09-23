/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/nextjs-blog-markdown',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: "@svgr/webpack", options: {icon: true}}]
    });

    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
