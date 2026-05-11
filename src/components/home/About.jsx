import RevealOnScroll from '../shared/RevealOnScroll'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.inner} container`}>
        <RevealOnScroll variant="fade-left" className={styles.imageCol}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageText}>Photo</span>
          </div>
          <div className={styles.imageAccent} />
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" className={styles.textCol}>
          <span className="label">About Us</span>
          <div className={styles.divider} />
          <h2 className={styles.heading}>We help brands grow through SEO.</h2>
          <p>
            ThreeDigital is a marketing agency with over a decade of experience helping
            startups and growing businesses find their voice, reach their audience, and
            grow with purpose. From scrappy startups to scaling enterprises, we've led
            campaigns that cut through the noise and deliver measurable results.
          </p>
          <p>
            Our approach is rooted in understanding people: what motivates them, what
            resonates with them, and what moves them to act. Every strategy we build
            starts with empathy and ends with impact.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>30+</span>
              <span className={styles.statLabel}>Clients Worldwide</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
