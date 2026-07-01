---
name: run-portfolio-website
description: Run, build, test, and smoke-check the ThreeDigital portfolio website (Vite SPA + Astro blog)
---

ThreeDigital portfolio website with two deployable units: a Vite React SPA (main site) and an Astro blog at `/blog`. Both share CSS tokens from `shared/`. A Sanity Studio (`studio/`) manages blog content but is optional for local dev (placeholder data is used when Sanity is unconfigured).

All paths below are relative to the repo root.

## Prerequisites

- Node.js >= 18 (tested with 22.17.0)
- npm >= 9

## Setup

```bash
npm install
cd blog && npm install && cd ..
```

## Run (agent path) - smoke test

Run the smoke driver to install, launch both servers, verify all routes, and run both production builds:

```bash
bash .claude/skills/run-portfolio-website/smoke.sh
```

Exit 0 means all checks passed. The script:
1. Installs deps for both units
2. Starts Vite SPA on port 5173 and Astro blog on port 3001
3. Checks SPA homepage returns 200 with "ThreeDigital" in HTML
4. Checks blog listing (`/blog/`) returns 200 with OG tags
5. Checks all 3 blog post pages return 200 with `article:published_time` meta
6. Runs `astro build` and verifies 4+ HTML pages in `blog/dist/`
7. Runs `vite build` and verifies `dist/index.html` exists
8. Cleans up all background processes on exit

## Run (agent path) - dev servers

For interactive work, start the servers individually:

```bash
# SPA (port 5173)
npx vite --port 5173

# Blog (port 3001, from blog/ directory)
cd blog && npx astro dev --port 3001
```

Verify with curl:
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173        # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/blog/  # 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/blog/technical-seo-audits-organic-growth/  # 200
```

## Build

```bash
# SPA
npx vite build          # output: dist/

# Blog (from blog/ directory)
cd blog && npx astro build   # output: blog/dist/
```

## Key routes

| Route | Unit | What to check |
|---|---|---|
| `localhost:5173` | SPA | Title contains "ThreeDigital" |
| `localhost:5173` → click "Blog" | SPA | Navigates to `/blog` (full page nav, not SPA route) |
| `localhost:3001/blog/` | Blog | Listing page, BlogGrid island hydrates with search/filter |
| `localhost:3001/blog/technical-seo-audits-organic-growth/` | Blog | Post page with TOC, AI Summary accordion, share button |
| `localhost:3001/blog/ai-scale-content-marketing/` | Blog | Post page |
| `localhost:3001/blog/link-building-2026/` | Blog | Post page |

## Gotchas

- **Blog must be launched from `blog/` directory.** Running `npx astro dev` from the repo root builds zero pages because the Astro config is in `blog/`.
- **Blog uses `base: '/blog'`** in `astro.config.mjs`. All internal links include the `/blog` prefix. When checking routes via curl, always include the `/blog/` prefix.
- **Placeholder data is always available.** The blog works without Sanity credentials. If `PUBLIC_SANITY_PROJECT_ID` is set in `blog/.env`, it tries Sanity first, falls back to placeholders on failure. This means the dev server and build always succeed regardless of Sanity state.
- **Astro blog post URLs need trailing slashes** in dev mode. `curl localhost:3001/blog/slug` redirects (301) to `localhost:3001/blog/slug/`.
- **SPA-to-blog navigation is a full page load** (regular `<a href="/blog">` tag), not a client-side route. The two apps are independent; React Router handles SPA routes, Astro handles blog routes.
- **`find` not `ls **`** for counting build output. macOS bash doesn't support `**` globs without `shopt -s globstar`.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `astro build` outputs "0 page(s) built" | You ran it from the repo root. `cd blog` first. |
| Blog returns 404 on post pages | Check trailing slash. Use `/blog/slug/` not `/blog/slug`. |
| `Configuration must contain 'projectId'` in blog logs | Normal if no `.env` file. The code falls back to placeholder data. Not an error. |
| Port already in use | `lsof -ti :5173 \| xargs kill` or `lsof -ti :3001 \| xargs kill` |
