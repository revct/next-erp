module.exports = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
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
