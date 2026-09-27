# Harry Jenkins’ portfolio

A Linux-inspired portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Content is statically rendered; theme switching uses `next-themes`.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Edit `src/data/data.json` for profile details, skills, project descriptions, links, and screenshot filenames. Register new screenshots as static imports in `src/components/Project.tsx`; Next.js reads their dimensions automatically. Screenshot width is capped at 560px in `src/app/globals.css`, with height scaling to preserve the aspect ratio. Layout styles and both colour palettes live in that stylesheet.

## Checks

```sh
pnpm lint
pnpm exec tsc --noEmit
pnpm build
pnpm audit --registry=https://registry.npmjs.org
```

The Google font is downloaded at build time and self-hosted in the generated site. Builds need access to Google Fonts. If a restricted environment prevents Turbopack from opening its worker port, `pnpm build --webpack` uses Next.js’s supported alternative compiler.

## Search and sharing

The production URL is `https://www.harryj.dev`, matching the existing public redirect. Keep `url` in `src/data/data.json` aligned with the primary domain configured at the host. Metadata, Person/ProfilePage JSON-LD, `/robots.txt`, `/sitemap.xml`, and the generated `/opengraph-image` use the same profile data. The homepage canonical is scoped to the homepage so 404 pages do not claim to be it.

After deploying, verify the domain in Google Search Console and Bing Webmaster Tools, submit the sitemap, and inspect the homepage. Check Cloudflare crawler settings as well as the application’s robots response. See [AUDIT.md](AUDIT.md) for findings, verification, and follow-up work.
