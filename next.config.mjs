import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

// Static export: `next build` writes the whole site to out/, served by a
// Cloudflare Worker as static assets (wrangler.jsonc). No server runs, so
// redirects live in public/_redirects and images are not optimized at runtime.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
