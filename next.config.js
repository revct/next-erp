/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
    styledComponents: true,
  },
  images: {
    domains: ["picsum.photos"],
  },
};
