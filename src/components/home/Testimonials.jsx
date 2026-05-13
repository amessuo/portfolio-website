import RevealOnScroll from '../shared/RevealOnScroll'
import oussamaImg from '../../assets/images/oussama.jpeg'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Maya Pasek',
    role: 'Head of Content, B2B Content Strategist',
    quote: 'Oussama thinks like a marketer, not a developer. He taught me to build a website with AI tools in a couple of sessions. No jargon, just clear steps. What would have taken me weeks, he made feel effortless.',
  },
  {
    name: 'Sean Griffith',
    role: 'Founder, Truffle',
    quote: 'Thanks for everything here. We really appreciate everything you\'ve done along the way. You certainly haven\'t heard the last from us.',
  },
  {
    name: 'David Pawlan',
    role: 'Co-founder, Aloa',
    quote: 'Oussama is one of the sharpest SEO and digital marketing minds I\'ve worked with. I learned more from him than from anyone else in the space. Truly wouldn\'t be where I am without his guidance.',
  },
]

const values = [
  { title: 'Numbers-first.', text: 'Every engagement opens with a baseline and a target. If it isn\'t moving the metric, it goes.' },
  { title: 'A system, not just campaigns.', text: 'I leave behind infrastructure that makes the next quarter easier than the last.' },
  { title: 'Comfortable in regulated environments.', text: 'Approvals, documentation, audit trails. None of it slows the work down.' },
  { title: 'Built for the handoffs.', text: 'I keep work moving between sales, founders, and creative without losing context.' },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        {/* Top: Photo + intro */}
        <RevealOnScroll className={styles.topRow}>
          <div className={styles.introCol}>
            <div className={styles.photoRow}>
              <div className={styles.photoWrap}>
                <img src={oussamaImg} alt="Oussama Bettaieb" className={styles.photo} />
              </div>
              <div>
                <h2 className={styles.heading}>Why work with Oussama?</h2>
              </div>
            </div>
            <p className={styles.description}>
              I'm a B2B marketer who treats search and lifecycle as a system, not a checklist.
            </p>
            <p className={styles.description}>
              I build marketing functions from zero and turn them into systems that compound. Strategy, execution, and the reporting that keeps both honest. The approach has worked across SaaS, healthcare, and B2B services in Europe, MENA, and North America.
            </p>
          </div>

          <div className={styles.valuesCol}>
            <p className={styles.subheading}>What you actually get:</p>
            <ul className={styles.valueList}>
              {values.map((v, i) => (
                <li key={i}>
                  <strong>{v.title}</strong> {v.text}
                </li>
              ))}
            </ul>
            <p className={styles.closingLine}>
              Plan, pipeline, and the numbers to defend both. That's the work.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bottom: 4 testimonial cards */}
        <RevealOnScroll variant="fade-up" className={styles.cardsRow}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.avatar}>
                  <span className={styles.avatarInitial}>
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 20 20" fill="#000000">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.28l-4.77 2.51.91-5.33-3.87-3.77 5.34-.78z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  )
}
