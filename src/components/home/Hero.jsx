import { motion } from 'framer-motion'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Hero.module.css'

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const scrollTo = useSmoothScroll()

  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        {/* LEFT COLUMN */}
        <motion.div
          className={styles.left}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={fadeUp}>
            <span className={styles.badgeDot} />
            <span>AVAILABLE / 2 SLOTS, Q2 2026</span>
          </motion.div>

          <motion.h1 className={styles.headline} variants={fadeUp}>
            SEO that actually<br />
            <em className={styles.accent}>compounds</em>.
          </motion.h1>

          <motion.p className={styles.sub} variants={fadeUp}>
            I'm Oussama. I build visibility across every platform your buyers
            search (Google, ChatGPT, Perplexity, Reddit) and keep it growing
            long after the engagement ends.
          </motion.p>

          <motion.div className={styles.ctaRow} variants={fadeUp}>
            <button
              onClick={() => scrollTo('contact')}
              className={styles.cta}
            >
              Start with a free audit
              <span className={styles.ctaArrow}>&rarr;</span>
            </button>
            <span className={styles.ctaNote}>
              <strong>No pitch.</strong><br />
              Just the numbers.
            </span>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN — stat card */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.statCard}>
            <p className={styles.statLabel}>
              <span className={styles.statDash} />
              A REAL CLIENT AVERAGE
            </p>

            <div className={styles.statNumber}>
              <span className={styles.statBlack}>+92</span>
              <span className={styles.statFaded}>.91</span>
              <span className={styles.statPercent}>%</span>
            </div>

            <div className={styles.statMeta}>
              <div className={styles.statMetaBlock}>
                <p className={styles.statMetaLabel}>WHAT IT IS</p>
                <p className={styles.statMetaText}>
                  Average organic traffic growth across every client since 2021.
                </p>
              </div>
              <div className={styles.statMetaBlock}>
                <p className={styles.statMetaLabel}>HOW LONG</p>
                <p className={styles.statMetaText}>
                  Measured over the first 6 months of each engagement.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
