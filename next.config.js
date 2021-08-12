module.exports = {
  reactStrictMode: true,
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
