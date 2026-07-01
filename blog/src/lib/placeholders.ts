const placeholderBody = [
  { _key: 'b1', _type: 'block', style: 'h2', children: [{ _key: 'c1', _type: 'span', text: 'Why Technical SEO Still Matters' }] },
  { _key: 'b2', _type: 'block', style: 'normal', children: [{ _key: 'c2', _type: 'span', text: 'Most teams treat technical SEO as a one-time checklist. Run a crawl, fix the red flags, move on. But the sites that consistently win organic traffic treat it as an ongoing system. Every improvement compounds: faster pages keep users engaged longer, cleaner architecture helps search engines discover new content sooner, and structured data opens up richer SERP features.' }] },
  { _key: 'b3', _type: 'block', style: 'h2', children: [{ _key: 'c3', _type: 'span', text: 'The Core Web Vitals Connection' }] },
  { _key: 'b4', _type: 'block', style: 'normal', children: [{ _key: 'c4', _type: 'span', text: 'Google has made it clear that page experience signals factor into rankings. Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift are not just vanity metrics. They reflect real user experience, and sites that optimize for them tend to see lower bounce rates and higher conversion rates alongside ranking improvements.' }] },
  { _key: 'b5', _type: 'block', style: 'h3', children: [{ _key: 'c5', _type: 'span', text: 'Measuring What Matters' }] },
  { _key: 'b6', _type: 'block', style: 'normal', children: [{ _key: 'c6', _type: 'span', text: 'Lab data from Lighthouse gives you a controlled baseline, but field data from CrUX tells the real story. The gap between the two often reveals issues that only appear under real-world conditions: slow third-party scripts, layout shifts from ad placements, or font-loading strategies that work in dev but fail on slower connections.' }] },
  { _key: 'b7', _type: 'block', style: 'h2', children: [{ _key: 'c7', _type: 'span', text: 'Site Architecture and Internal Linking' }] },
  { _key: 'b8', _type: 'block', style: 'normal', children: [{ _key: 'c8', _type: 'span', text: 'A flat site architecture ensures that every important page is reachable within three clicks from the homepage. But architecture is not just about depth. It is about creating topical clusters where related content reinforces each other through strategic internal links. This signals to search engines which pages are most important and how topics relate to each other.' }] },
  { _key: 'b9', _type: 'block', style: 'h2', children: [{ _key: 'c9', _type: 'span', text: 'Crawl Budget Optimization' }] },
  { _key: 'b10', _type: 'block', style: 'normal', children: [{ _key: 'c10', _type: 'span', text: 'For large sites, managing crawl budget is critical. If search engine bots spend their time crawling duplicate pages, parameter variations, or low-value URLs, your most important content gets discovered less frequently. A clean robots.txt, proper canonical tags, and strategic use of noindex directives help focus crawler attention where it matters most.' }] },
  { _key: 'b11', _type: 'block', style: 'h2', children: [{ _key: 'c11', _type: 'span', text: 'Making It Sustainable' }] },
  { _key: 'b12', _type: 'block', style: 'normal', children: [{ _key: 'c12', _type: 'span', text: 'The best technical SEO programs build monitoring into the development workflow. Automated crawl reports flag regressions before they reach production. Performance budgets in CI/CD pipelines prevent slowdowns from shipping. And regular audits every quarter catch the slow drift that accumulates as content grows and code changes stack up.' }] },
]

const authorData = { name: 'Oussama Bettaieb', image: '/blog/images/author.jpeg', role: 'Founder, ThreeDigital', bio: 'Digital marketing strategist specializing in SEO, link building, and AI-powered growth systems.' }

export const placeholderListPosts = [
  {
    _id: '1',
    title: 'How Technical SEO Audits Drive Long-Term Organic Growth',
    slug: { current: 'technical-seo-audits-organic-growth' },
    excerpt: 'A structured approach to technical SEO can transform your site from a collection of pages into a growth engine. Here is what to prioritize and why it compounds over time.',
    publishedAt: '2026-06-15T10:00:00Z',
    estimatedReadingTime: 7,
    mainImage: '/blog/images/cover-seo-audit.svg',
    author: authorData,
    categories: [{ _id: 'cat-1', title: 'SEO', slug: { current: 'seo' } }],
  },
  {
    _id: '2',
    title: 'Using AI to Scale Content Marketing Without Losing Quality',
    slug: { current: 'ai-scale-content-marketing' },
    excerpt: 'AI can accelerate your content pipeline, but only if you set the right guardrails. Here is how to use LLMs as a multiplier for your editorial process, not a replacement.',
    publishedAt: '2026-06-08T10:00:00Z',
    estimatedReadingTime: 8,
    mainImage: '/blog/images/cover-ai-content.svg',
    author: authorData,
    categories: [{ _id: 'cat-2', title: 'AI in Marketing', slug: { current: 'ai-in-marketing' } }],
  },
  {
    _id: '3',
    title: 'Link Building in 2026: What Still Works and What to Avoid',
    slug: { current: 'link-building-2026' },
    excerpt: 'The link building landscape has shifted. Digital PR, strategic partnerships, and original research now outperform old-school tactics. A look at what is working right now.',
    publishedAt: '2026-05-28T10:00:00Z',
    estimatedReadingTime: 6,
    mainImage: '/blog/images/cover-link-building.svg',
    author: authorData,
    categories: [{ _id: 'cat-1', title: 'SEO', slug: { current: 'seo' } }],
  },
]

export const placeholderCategories = [
  { _id: 'cat-1', title: 'SEO', slug: { current: 'seo' } },
  { _id: 'cat-2', title: 'AI in Marketing', slug: { current: 'ai-in-marketing' } },
]

export const placeholderPostDetails: Record<string, any> = {
  'technical-seo-audits-organic-growth': {
    ...placeholderListPosts[0],
    primaryKeyword: 'Organic Growth',
    aiSummary: 'This article argues that technical SEO should be treated as an ongoing system, not a one-time audit. It covers five areas: why compounding improvements in speed, architecture, and structured data drive long-term traffic; how Core Web Vitals (LCP, INP, CLS) directly correlate with rankings and conversions; the gap between lab data and field data when measuring performance; how flat site architecture and topical clusters strengthen internal linking signals; and why crawl budget management through robots.txt, canonicals, and noindex directives keeps search engines focused on high-value pages.',
    body: placeholderBody,
    headings: [
      { text: 'Why Technical SEO Still Matters', style: 'h2', key: 'b1' },
      { text: 'The Core Web Vitals Connection', style: 'h2', key: 'b3' },
      { text: 'Measuring What Matters', style: 'h3', key: 'b5' },
      { text: 'Site Architecture and Internal Linking', style: 'h2', key: 'b7' },
      { text: 'Crawl Budget Optimization', style: 'h2', key: 'b9' },
      { text: 'Making It Sustainable', style: 'h2', key: 'b11' },
    ],
  },
  'ai-scale-content-marketing': {
    ...placeholderListPosts[1],
    primaryKeyword: 'Content Marketing',
    aiSummary: 'The article makes the case that AI writing tools are a multiplier for editorial teams, not a replacement. It breaks down a four-stage workflow where AI handles research synthesis, outline generation, first-draft acceleration, and SEO optimization, while humans own strategy, unique angles, and final polish.',
    body: [
      { _key: 'a1', _type: 'block', style: 'h2', children: [{ _key: 'ac1', _type: 'span', text: 'The Promise and the Pitfall' }] },
      { _key: 'a2', _type: 'block', style: 'normal', children: [{ _key: 'ac2', _type: 'span', text: 'AI writing tools have made it possible to produce content at a pace that would have been unthinkable two years ago. But volume without quality is noise. The teams winning with AI content are not the ones generating the most articles. They are the ones using AI to enhance their editorial process while keeping human judgment at the center.' }] },
      { _key: 'a3', _type: 'block', style: 'h2', children: [{ _key: 'ac3', _type: 'span', text: 'Building an AI-Augmented Workflow' }] },
      { _key: 'a4', _type: 'block', style: 'normal', children: [{ _key: 'ac4', _type: 'span', text: 'The key is to use AI at the stages where it adds the most leverage: research synthesis, outline generation, first-draft acceleration, and SEO optimization. Leave the strategic decisions, the unique angles, and the final editorial polish to your team.' }] },
      { _key: 'a5', _type: 'block', style: 'h2', children: [{ _key: 'ac5', _type: 'span', text: 'Quality Guardrails That Work' }] },
      { _key: 'a6', _type: 'block', style: 'normal', children: [{ _key: 'ac6', _type: 'span', text: 'Every piece of AI-assisted content should pass through a fact-check layer, a brand voice review, and an originality check. Automated tools can handle some of this, but a human editor who understands your audience is irreplaceable.' }] },
      { _key: 'a7', _type: 'block', style: 'h2', children: [{ _key: 'ac7', _type: 'span', text: 'Measuring Content Quality at Scale' }] },
      { _key: 'a8', _type: 'block', style: 'normal', children: [{ _key: 'ac8', _type: 'span', text: 'Track engagement metrics alongside production metrics. Time on page, scroll depth, and conversion rates tell you whether your accelerated output is actually resonating.' }] },
    ],
    headings: [
      { text: 'The Promise and the Pitfall', style: 'h2', key: 'a1' },
      { text: 'Building an AI-Augmented Workflow', style: 'h2', key: 'a3' },
      { text: 'Quality Guardrails That Work', style: 'h2', key: 'a5' },
      { text: 'Measuring Content Quality at Scale', style: 'h2', key: 'a7' },
    ],
  },
  'link-building-2026': {
    ...placeholderListPosts[2],
    primaryKeyword: 'Link Building',
    aiSummary: 'This article surveys the link building landscape in 2026 and divides tactics into what works and what to avoid. On the positive side: original research and data studies that journalists cite naturally, digital PR campaigns, and long-term relationship building with complementary brands and creators.',
    body: [
      { _key: 'l1', _type: 'block', style: 'h2', children: [{ _key: 'lc1', _type: 'span', text: 'The State of Link Building Today' }] },
      { _key: 'l2', _type: 'block', style: 'normal', children: [{ _key: 'lc2', _type: 'span', text: 'Link building has evolved beyond guest posts and directory submissions. Google is better than ever at identifying manufactured link patterns, and the penalty for getting caught is steeper.' }] },
      { _key: 'l3', _type: 'block', style: 'h2', children: [{ _key: 'lc3', _type: 'span', text: 'Digital PR and Data-Driven Stories' }] },
      { _key: 'l4', _type: 'block', style: 'normal', children: [{ _key: 'lc4', _type: 'span', text: 'Original research and data studies remain the highest-ROI link building tactic. Journalists and bloggers need data to support their stories, and if your brand is the source, the links follow naturally.' }] },
      { _key: 'l5', _type: 'block', style: 'h2', children: [{ _key: 'lc5', _type: 'span', text: 'What to Stop Doing' }] },
      { _key: 'l6', _type: 'block', style: 'normal', children: [{ _key: 'lc6', _type: 'span', text: 'Mass outreach templates, PBN links, and paid placements on low-quality sites are not just ineffective. They are actively risky.' }] },
      { _key: 'l7', _type: 'block', style: 'h2', children: [{ _key: 'lc7', _type: 'span', text: 'Building Relationships That Generate Links' }] },
      { _key: 'l8', _type: 'block', style: 'normal', children: [{ _key: 'lc8', _type: 'span', text: 'The best link builders in 2026 think like relationship managers, not outreach machines.' }] },
    ],
    headings: [
      { text: 'The State of Link Building Today', style: 'h2', key: 'l1' },
      { text: 'Digital PR and Data-Driven Stories', style: 'h2', key: 'l3' },
      { text: 'What to Stop Doing', style: 'h2', key: 'l5' },
      { text: 'Building Relationships That Generate Links', style: 'h2', key: 'l7' },
    ],
  },
}
