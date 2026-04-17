import RevealOnScroll from '../shared/RevealOnScroll'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechStart',
    image: null,
    quote: 'ThreeDigital transformed our online presence. Our organic traffic tripled in just 6 months, and we saw a 200% increase in qualified leads.',
  },
  {
    name: 'James Chen',
    role: 'Founder, Waltero',
    image: null,
    quote: 'The link building strategy was game-changing. Our domain rating jumped from 21 to 35 and leads increased by over 2,500%. Incredible results.',
  },
  {
    name: 'Emma Thompson',
    role: 'Marketing Director, HealthPlus',
    image: null,
    quote: 'Working with Oussama was a turning point. He understood our niche market and delivered an SEO strategy that actually moved the needle.',
  },
  {
    name: 'David Park',
    role: 'Co-founder, Truffle',
    image: null,
    quote: 'From DR 4 to 36 in four months — we didn\'t think it was possible. The team\'s expertise in authority building is unmatched.',
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
