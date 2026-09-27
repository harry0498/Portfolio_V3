# Portfolio audit

Reviewed 25 September 2026 against the live site and this repository. Improvements are local and unpublished.

## Findings and changes

| Priority | Original finding | Resolution |
| --- | --- | --- |
| High | `package.json`: Next.js 16.1.6 and locked dependencies had published security advisories. The initial npm audit reported 73 findings, including two critical advisories; this does not establish that the deployed site was exploitable. | Updated Next.js and its ESLint configuration to 16.3.6, refreshed existing build/lint dependencies and affected transitive packages. Final npm audit: zero known vulnerabilities. |
| High | `src/app/layout.tsx`: title only contained a name; no canonical, social preview, or structured identity. | Descriptive name/role metadata, canonical matching the live `www` destination, Open Graph/Twitter metadata, generated 1200×630 preview, and linked Person, ProfilePage, WebSite, and project JSON-LD. |
| High | No sitemap route. Live `/sitemap.xml` returned 404. The live robots response contained Cloudflare-generated comments and an upstream 404 marker. | Added framework-native `/sitemap.xml` and `/robots.txt`. Public content is allowed to be crawled, with the sitemap advertised. Verify Cloudflare’s final response after deployment. |
| High | `src/data/data.json`: the portfolio still described the owner as a Full Stack Developer. | “DevOps Engineer” headline with “Platform engineering · Full-stack development” as supporting text. Updated profile, metadata, and skill order consistently. No unconfirmed platforms, employers, or results added. |
| Medium | `src/components/Footer.tsx`, `src/app/globals.css`: sticky contact footer visibly covered content. | Replaced it with a normal-flow contact section and footer. |
| Medium | `src/components/ThemeToggle.tsx`: icon-only button had no accessible name. Live axe scan confirmed the violation. It also appeared only after hydration. | Explicit action label, fixed 44px control, reserved server-rendered space, and verified theme persistence. |
| Medium | `src/components/About.tsx`: nested `main`; project titles were highlighted text rather than headings; skills were generic divs. | Single main landmark, labelled sections, project articles and headings, list semantics, skip link, keyboard focus styles, and reduced-motion handling. |
| Medium | `src/app/globals.css`, `src/components/Project.tsx`: oversized uniform typography, dense project paragraphs, unconstrained screenshots, inaccurate 2000×2000 image dimensions, and no responsive `sizes`. | Deliberate text hierarchy, terminal-inspired profile panel, concise project details, consistent project layouts, actual image dimensions and responsive image delivery. |
| Medium | `src/components/Navbar.tsx`: no section navigation or early contact action. | Responsive links to projects, skills, biography, and contact; hero actions and visible GitHub links. |
| Low | `src/data/data.ts`: experience calculation only subtracted calendar years, overstating elapsed years before the anniversary. Statically built counts also became stale. | Used stable “since 2020” and “since 2017” statements and removed the redundant helper. |
| Low | `next.config.ts`: no application-level hardening headers. | Added MIME sniffing protection, framing restriction, referrer policy, and disabled unused camera, microphone, and geolocation permissions; removed the framework disclosure header. |

The visual direction preserves the green palette and terminal vocabulary. JetBrains Mono carries headings, navigation, and terminal details; a restrained sans-serif body improves reading of longer text. The site continues to respect system theme preference and remembers an explicit selection.

## Verification

- Biome and TypeScript checks pass.
- Production build passes with `pnpm build --webpack`; homepage, 404, social image, robots, and sitemap are prerendered. The default Turbopack build was blocked by this environment’s local worker-port restriction. The first sandboxed build also could not fetch Google Fonts. Neither required a change to the default production build command.
- Dependency audit against the official npm registry: zero advisories. The configured registry mirror did not offer an audit endpoint, so checks explicitly used `https://registry.npmjs.org`.
- Chromium checks cover 320px, 390px, 768px, and 1440px layouts; dark and light themes at mobile and desktop sizes; no horizontal overflow; theme switching and persistence; anchor offsets; skip-link focus; one main and one h1; and no browser page errors.
- Verified homepage content and project links are present without JavaScript.
- Verified canonical, parseable JSON-LD, Open Graph/Twitter metadata, generated PNG response, robots/sitemap responses, and hardening headers.
- Unknown routes return 404 with `noindex` and no homepage canonical. The home link works.
- Existing Clockwork, project repository, and GitHub profile URLs returned HTTP 200 during the live check.

### Local Lighthouse measurement

Mobile emulation, production build, Chromium, one local run. Network and server conditions differ from the public deployment.

| Category | Score |
| --- | --- |
| Performance | 99 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

Measured LCP: 2.0s; total blocking time: 10ms; CLS: 0. Automated scores are not a complete accessibility certification or a measure of actual indexing. Browser accessibility checks are supplemented with keyboard testing and visual inspection.

The remaining Lighthouse observations concern framework JavaScript and the stylesheet/font request chain. The page is prerendered and only theme switching needs application client state. Adding more optimisation machinery is not justified by the current measurements.

## Search and AI visibility after deployment

1. Deploy the reviewed changes through the existing process. This audit did not stage, commit, push, or deploy anything.
2. In the hosting domain settings, change the current non-www → www redirect from temporary 307 to permanent 308 (or 301), retaining `www.harryj.dev` as the primary host. The canonical and sitemap already match that destination.
3. Fetch the public homepage, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`. Confirm HTTP 200, the expected content, and no `noindex`, authentication challenge, or crawler block introduced by the CDN. Cloudflare currently modifies robots responses; purge stale responses if necessary.
4. Review Cloudflare AI Crawl Control, bot/challenge settings, and WAF rules. Allow intended search and retrieval crawlers. Application robots rules cannot override an edge block. Search access and model-training permission are separate choices.
5. Verify ownership in Google Search Console and Bing Webmaster Tools, submit `https://www.harryj.dev/sitemap.xml`, and inspect/request indexing of the homepage. No account access or verification token was available during this audit.
6. Recheck PageSpeed Insights and Search Console field data after deployment. Local tests do not measure public CDN behaviour or real-user Core Web Vitals.

The implementation exposes clear HTML, stable links, a sitemap, consistent identity, and structured data matching visible content. An `llms.txt` file is not required for Google’s AI search features; no ranking or AI-citation guarantee is implied. OpenAI documents `OAI-SearchBot` for search inclusion separately from `GPTBot` for training. The wildcard robots rule permits public crawling; the owner can make separate training-policy choices at the edge.

## Content opportunities

The biggest remaining editorial gap is evidence of current platform work. When details are available, add a specific DevOps project or short case study covering the problem, personal contribution, architecture, deployment/operations decisions, and verifiable outcome. No usage figures or reliability claims should be invented. Individual project pages are worthwhile when there is enough substantive material to support them; splitting the current short summaries would create thin pages.

Professional role details were intentionally left limited to the information confirmed during this review. A CV, employer history, LinkedIn profile, location, and availability were not assumed.

## References

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI: crawler overview](https://developers.openai.com/api/docs/bots)
- [Next.js: robots metadata route](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Next.js: image optimisation security advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4)
- [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md)
