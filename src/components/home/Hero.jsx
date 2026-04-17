import { motion } from 'framer-motion'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollTo = useSmoothScroll()

  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Boost your online presence with our marketing agency specializing in SEO.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => scrollTo('contact')}
            className={styles.cta}
          >
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}
