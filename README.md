# zkVot-landing

Static site: `npm run build` exports it to `out/` (`output: "export"` in
`next.config.mjs`). It is served by a Cloudflare Worker as static assets, see
`wrangler.jsonc`.

- Local: `npm run dev`.
- Deploy: `npm run build && npx wrangler deploy`, or connect the repo in the
  Cloudflare dashboard (Workers, import a repository) with build command
  `npm run build` and deploy command `npx wrangler deploy`.
- Redirects live in `public/_redirects` (no server, so `next.config.mjs`
  redirects don't apply).
