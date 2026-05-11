import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import caseStudies from '../data/caseStudies'
import BookACall from '../components/home/BookACall'
import styles from './CaseStudiesPage.module.css'

function CaseStudyCard({ study, index }) {
  const topResults = study.results.slice(0, 3)

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link to={`/case-studies/${study.slug}`} className={styles.cardLink}>
        <div className={styles.cardHighlight}>
          {topResults.map((r, i) => (
            <div key={i} className={styles.cardStat}>
              <span className={styles.cardStatValue}>{r.value}</span>
              <span className={styles.cardStatMetric}>{r.metric}</span>
            </div>
          ))}
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <span className={styles.cardClient}>{study.client}</span>
            <span className={styles.cardYear}>{study.year}</span>
          </div>

          <h3 className={styles.cardTitle}>{study.title}</h3>
          <p className={styles.cardSummary}>{study.summary}</p>

          <div className={styles.cardFooter}>
            <div className={styles.cardTags}>
              {study.tags.slice(0, 3).map((tag) => (
                <span key={tag} className={styles.cardTag}>{tag}</span>
              ))}
            </div>
            <span className={styles.cardCta}>
              {study.ctaLabel} &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.headerLabel}>Case Studies</span>
          <h1 className={styles.title}>
            Choose the project that inspires you
          </h1>
          <p className={styles.subtitle}>
            Real strategies, real results. Explore how we've helped brands grow
            their organic presence and generate more leads.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>

      <BookACall />
    </main>
  )
}
