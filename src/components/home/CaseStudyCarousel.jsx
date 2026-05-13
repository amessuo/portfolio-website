import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import caseStudies from '../../data/caseStudies'
import RevealOnScroll from '../shared/RevealOnScroll'
import styles from './CaseStudyCarousel.module.css'

export default function CaseStudyCarousel() {
  const [current, setCurrent] = useState(0)
  const study = caseStudies[current]

  const prev = () => setCurrent((c) => (c === 0 ? caseStudies.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === caseStudies.length - 1 ? 0 : c + 1))

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <RevealOnScroll variant="fade-left" className={styles.textSide}>
          <span className={styles.overline}>Case Studies</span>
          <h2 className={styles.heading}>
            Bring in more leads
          </h2>
          <p className={styles.textDesc}>
            Real results from real clients. Browse my case studies to see how I've helped businesses grow their organic presence and generate more leads.
          </p>
          <Link to="/case-studies" className={styles.viewAll}>
            View all case studies &rarr;
          </Link>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" className={styles.carouselSide}>
          <div className={styles.carousel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={study.slug}
                className={styles.card}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardLabel}>{study.client}</span>
                  <span className={styles.cardYear}>{study.year}</span>
                </div>

                <h3 className={styles.cardTitle}>{study.title}</h3>

                {/* Key results inset block */}
                <div className={styles.resultsBlock}>
                  {study.results.slice(0, 3).map((r, i) => (
                    <div key={i} className={styles.resultItem}>
                      <span className={styles.resultValue}>{r.value}</span>
                      <span className={styles.resultMetric}>{r.metric}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.cardTags}>
                  {study.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>

                <Link to={`/case-studies/${study.slug}`} className={styles.cardCta}>
                  {study.ctaLabel} &rarr;
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className={styles.controls}>
              <button onClick={prev} className={styles.navBtn} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <div className={styles.dots}>
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button onClick={next} className={styles.navBtn} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
