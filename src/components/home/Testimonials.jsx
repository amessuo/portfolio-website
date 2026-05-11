import RevealOnScroll from '../shared/RevealOnScroll'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Maya Pasek',
    role: 'Head of Content, B2B Content Strategist',
    image: null,
    quote: 'Oussama thinks like a marketer, not a developer. He taught me to build a website with AI tools in a couple of sessions. No jargon, just clear steps. What would have taken me weeks, he made feel effortless.',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <RevealOnScroll variant="fade-left" className={styles.textSide}>
          <h2 className={styles.heading}>Why work with Oussama?</h2>
          <p className={styles.description}>
            With over a decade of experience in SEO and digital marketing, I've helped
            startups and growing businesses across 50+ countries achieve measurable results.
            From building domain authority to driving organic traffic growth, my strategies
            are rooted in data, executed with precision, and designed to deliver ROI.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" className={styles.gridSide}>
          <div className={styles.grid}>
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
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
