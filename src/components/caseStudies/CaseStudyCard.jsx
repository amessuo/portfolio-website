import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './CaseStudyCard.module.css'

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={`/case-studies/${study.slug}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <div
            className={styles.image}
            style={{
              background: `linear-gradient(135deg, ${study.color}40 0%, ${study.color}20 50%, var(--light-gray) 100%)`,
            }}
          >
            <span className={styles.imageLabel}>{study.client}</span>
          </div>
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span className={styles.client}>{study.client}</span>
            <span className={styles.year}>{study.year}</span>
          </div>

          <h3 className={styles.title}>{study.title}</h3>
          <p className={styles.summary}>{study.summary}</p>

          <div className={styles.tags}>
            {study.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <span className={styles.cta}>
            See More Details <span className={styles.arrow}>&rarr;</span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
