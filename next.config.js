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
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};
