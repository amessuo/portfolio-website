import { useState, useCallback } from 'react'
import RevealOnScroll from '../shared/RevealOnScroll'
import ServiceModal from './ServiceModal'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    title: 'Search Everywhere Visibility',
    description: 'Comprehensive search engine optimization strategies that boost your rankings, drive organic traffic, and turn clicks into customers.',
    highlight: '+92.91%',
    highlightLabel: 'avg. organic traffic growth',
    highlightSub: 'Across all client engagements',
    features: [
      'Full technical SEO audit',
      'On-page content optimization',
      'Strategic link building',
      'Internal linking architecture',
    ],
    tags: ['Technical SEO', 'On-Page', 'Link Building'],
    featured: false,
    fullDescriptionParagraphs: [
      'Your buyers are searching everywhere. Google, ChatGPT, Perplexity, Reddit, YouTube. Most businesses only show up in one or two of these places, if at all. We change that.',
      'We find where you\'re missing, build the authority and content that puts you in front of buyers across every platform they use to find answers, and make sure that visibility compounds over time. The result: more of the right people finding you, regardless of where they search.',
    ],
    testimonials: [
      {
        quote: 'Our organic traffic doubled in 6 months and leads increased by over 120%. The SEO strategy was meticulous and results-driven.',
        name: 'Emma Thompson',
        role: 'Marketing Director, HealthPlus',
      },
      {
        quote: 'Domain rating jumped from 4 to 29 — we went from invisible to ranking on page one for our most competitive keywords.',
        name: 'Dr. Alex Reed',
        role: 'Founder, London Scar Clinic',
      },
    ],
    results: [
      { value: '+92.91%', label: 'Organic traffic growth' },
      { value: '2x', label: 'Leads doubled in 6 months' },
      { value: 'DR 4→29', label: 'Domain rating increase' },
      { value: '+2,512%', label: 'Lead generation growth' },
    ],
  },
  {
    num: '02',
    title: 'Marketing Strategy',
    description: 'Data-driven marketing plans tailored to your business goals, audience, and competitive landscape — from research to execution.',
    highlight: '+30.57%',
    highlightLabel: 'avg. conversion increase',
    highlightSub: 'Across paid & organic channels',
    features: [
      'All from SEO Booster',
      'PPC campaign management',
      'Content strategy & planning',
      'Performance analytics',
    ],
    tags: ['Content', 'PPC', 'Analytics'],
    featured: true,
    fullDescription:
      'We connect your business goals to measurable growth. Starting with a deep look at your audience, competitive landscape, and current performance data, we identify the highest-impact opportunities and build a roadmap to capture them. We use AI-powered research tools to move faster and sharper than traditional strategy work allows. Every decision is backed by data, and every campaign is designed to compound over time. We work alongside your team to execute, measure, and iterate, not just hand you a document and walk away.',
    whatYouGet: [
      {
        title: 'Audience & Competitive Research',
        description: 'AI-powered analysis of your market, competitors, and ICP to find the gaps worth going after.',
      },
      {
        title: 'Channel Strategy',
        description: 'A prioritized plan across organic, paid, content, and social based on where your highest ROI opportunities actually are.',
      },
      {
        title: 'Campaign Planning & KPIs',
        description: 'A clear execution roadmap with budget allocation, campaign structure, and the metrics that matter.',
      },
      {
        title: 'Ongoing Execution & Iteration',
        description: 'We stay in, measure what\'s working, and adjust. Strategy without execution is just a document.',
      },
    ],
    whatYouGetLabel: 'What\'s Included',
    testimonials: [
      {
        quote: 'The marketing strategy transformed how we approach growth. PPC conversions increased 30% while cost per lead dropped significantly.',
        name: 'James Chen',
        role: 'Founder, Waltero',
      },
      {
        quote: 'Finally a strategist who backs up every recommendation with data. Our ROI on marketing spend has never been higher.',
        name: 'Sarah Mitchell',
        role: 'CEO, TechStart',
      },
    ],
    results: [
      { value: '+30.57%', label: 'PPC conversion increase' },
      { value: '£19.90', label: 'Cost per lead achieved' },
      { value: '+23.45%', label: 'Organic lead growth' },
      { value: '+48.23%', label: 'Paid lead increase' },
    ],
  },
  {
    num: '03',
    title: 'The AI Marketing Build',
    description: 'Embed AI into your marketing stack to automate production, personalize at scale, and free your team to focus on strategy.',
    highlight: '10x',
    highlightLabel: 'content output per week',
    highlightSub: 'With the same team size',
    features: [
      'AI workflow audit & roadmap',
      'Custom GPT & automation setup',
      'AI-driven content & SEO pipelines',
      'Team training & enablement',
    ],
    tags: ['AI', 'Automation', 'Scale'],
    featured: false,
    fullDescription:
      'I work with marketing teams who are done experimenting with AI and ready to actually deploy it. I start with an audit of your current workflows, find the highest-leverage places to plug in AI, then build and install the systems myself. Every engagement ends with your team trained and owning the tools — not dependent on me to run them.',
    whatYouGet: [
      {
        title: 'AI Content Pipeline',
        description: 'Keyword research → brief generation → article draft → CMS publish. Fully automated, end-to-end.',
      },
      {
        title: 'GSC Intelligence Agent',
        description: 'A custom agent that surfaces SEO opportunities, tracks AI Overview cannibalization, and flags ranking drops — without anyone touching Search Console manually.',
      },
      {
        title: 'AI Visibility & GEO Audit',
        description: 'Find out where your brand appears (and doesn\'t) in AI-generated answers across ChatGPT, Perplexity, and Google AI Mode — and fix it.',
      },
      {
        title: 'Cold Outreach System',
        description: 'Prospect sourcing → AI-personalized email sequences → verified delivery. Built and installed in your stack.',
      },
      {
        title: 'Reddit Intelligence Layer',
        description: 'What your ICP is actually saying, in the communities they trust. Used to build content strategy, GTM angles, and messaging that doesn\'t sound like marketing.',
      },
    ],
    testimonials: [
      {
        quote: 'I came in skeptical. Six weeks later we had a content pipeline producing 10x our previous output, and my team runs it without me. That\'s rare.',
        name: 'Jordan Miles',
        role: 'Head of Marketing, Arcflow',
      },
      {
        quote: 'Oussama doesn\'t consult — he builds. He installed a GSC agent that now catches ranking issues before I even open Search Console. That alone was worth it.',
        name: 'Sara Chen',
        role: 'Marketing Manager, Stacklane',
      },
    ],
    results: [
      { value: '10x', label: 'Content output increase' },
      { value: '-62%', label: 'Production cost reduction' },
      { value: '+3.4x', label: 'Campaign experimentation rate' },
      { value: '18h', label: 'Saved per marketer weekly' },
    ],
    ctaLabel: 'Book a Build Call',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const handleClose = useCallback(() => setActiveService(null), [])

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <RevealOnScroll>
          <h2 className={styles.heading}>Three marketing services to serve all your needs</h2>
        </RevealOnScroll>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <RevealOnScroll key={service.num} delay={i * 0.1}>
              <div className={`${styles.card} ${service.featured ? styles.cardFeatured : ''}`}>
                {/* Title + description */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>

                {/* Highlight stat block */}
                <div className={`${styles.highlightBlock} ${service.featured ? styles.highlightFeatured : ''}`}>
                  <span className={styles.highlightValue}>{service.highlight}</span>
                  <span className={styles.highlightUnit}>{service.highlightLabel}</span>
                  <span className={styles.highlightSub}>{service.highlightSub}</span>
                </div>

                {/* Feature checklist */}
                <ul className={styles.features}>
                  {service.features.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={styles.learnBtn}
                  onClick={() => setActiveService(service)}
                >
                  Learn more
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={handleClose} />
    </section>
  )
}
