import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/zkVotProtocol.pdf",
        destination: "/article.pdf",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
