import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './ServiceModal.module.css'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

export default function ServiceModal({ service, onClose }) {
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    document.body.style.overflow = service ? 'hidden' : ''
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [service, onClose])

  const handleBookCall = () => {
    onClose()
    setTimeout(() => scrollTo('contact'), 100)
  }

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          className={styles.backdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            variants={modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
          >
            {/* Close button */}
            <button className={styles.close} onClick={onClose} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="5" y1="5" x2="15" y2="15" />
                <line x1="15" y1="5" x2="5" y2="15" />
              </svg>
            </button>

            {/* Service Name */}
            <motion.div variants={fadeUp} className={styles.header}>
              <h2 className={styles.title}>{service.title}</h2>
              <div className={styles.titleRule} />
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp} className={styles.descriptionBlock}>
              {service.fullDescriptionParagraphs
                ? service.fullDescriptionParagraphs.map((p, i) => (
                    <p key={i} className={styles.description}>{p}</p>
                  ))
                : <p className={styles.description}>{service.fullDescription}</p>
              }
            </motion.div>

            {/* What You Get — only for services that define it */}
            {service.whatYouGet && (
              <motion.div variants={fadeUp} className={styles.whatYouGet}>
                <h4 className={styles.colTitle}>{service.whatYouGetLabel || 'What You Get'}</h4>
                <div className={styles.whatYouGetGrid}>
                  {service.whatYouGet.map((item, i) => (
                    <div key={i} className={styles.whatYouGetCard}>
                      <span className={styles.whatYouGetTitle}>{item.title}</span>
                      <p className={styles.whatYouGetDesc}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Two columns: Testimonials | Previous Results */}
            <motion.div variants={fadeUp} className={styles.columns}>
              <div className={styles.colLeft}>
                <h4 className={styles.colTitle}>Testimonials</h4>
                <div className={styles.testimonials}>
                  {service.testimonials.map((t, i) => (
                    <div key={i} className={styles.testimonial}>
                      <p className={styles.testimonialQuote}>"{t.quote}"</p>
                      <div className={styles.testimonialAuthor}>
                        <div className={styles.testimonialAvatar}>
                          {t.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <span className={styles.testimonialName}>{t.name}</span>
                          <span className={styles.testimonialRole}>{t.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.colRight}>
                <h4 className={styles.colTitle}>Previous Results</h4>
                <div className={styles.results}>
                  {service.results.map((r, i) => (
                    <div key={i} className={styles.resultItem}>
                      <span className={styles.resultValue}>{r.value}</span>
                      <span className={styles.resultLabel}>{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Book Call CTA */}
            <motion.div variants={fadeUp} className={styles.footer}>
              <button onClick={handleBookCall} className={styles.bookCall}>
                {service.ctaLabel || 'Book Call'} &rarr;
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
