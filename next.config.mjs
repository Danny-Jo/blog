/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      //   issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
