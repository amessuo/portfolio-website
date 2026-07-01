// Generates a single sitemap for the whole site (dist/sitemap.xml).
// Covers static pages, case studies (from src/data), and every blog post
// (from Sanity), so the whole site lives in one sitemap that updates on
// each build. Best-effort: never throws, always writes the static URLs.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const SITE = 'https://www.oussamabettaieb.com'
const __dirname = dirname(fileURLToPath(import.meta.url))
const outFile = resolve(__dirname, '..', 'dist', 'sitemap.xml')

// Top-level static pages
const entries = [
  { path: '/', priority: '1.0' },
  { path: '/blog', priority: '0.9' },
  { path: '/case-studies', priority: '0.8' },
]

// Case studies (source of truth; fall back to known slugs)
let caseSlugs = ['cosmetic-surgery-clinic', 'scar-removal-clinic', 'truffle', 'waltero']
try {
  const mod = await import('../src/data/caseStudies.js')
  const list = mod.default || mod.caseStudies
  if (Array.isArray(list) && list.length) {
    caseSlugs = list.map((c) => c.slug).filter(Boolean)
  }
} catch (e) {
  console.warn('[sitemap] using fallback case-study slugs:', e.message)
}
for (const slug of caseSlugs) entries.push({ path: `/case-studies/${slug}`, priority: '0.7' })

// Blog posts from Sanity
const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'rzfqawgr'
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production'
try {
  const query = encodeURIComponent(
    '*[_type=="post" && defined(slug.current)]{"slug":slug.current,_updatedAt,publishedAt}'
  )
  const res = await fetch(
    `https://${projectId}.apicdn.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}`
  )
  const { result = [] } = await res.json()
  for (const p of result) {
    entries.push({
      path: `/blog/${p.slug}`,
      priority: '0.7',
      lastmod: (p._updatedAt || p.publishedAt || '').slice(0, 10) || undefined,
    })
  }
  console.log(`[sitemap] ${result.length} blog post(s) from Sanity`)
} catch (e) {
  console.warn('[sitemap] Sanity fetch failed, blog posts omitted:', e.message)
}

const body = entries
  .map((e) => {
    const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''
    return `  <url>\n    <loc>${SITE}${e.path}</loc>${lastmod}\n    <priority>${e.priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

writeFileSync(outFile, xml)
console.log(`[sitemap] wrote ${entries.length} URLs to dist/sitemap.xml`)
