import CaseStudyCard from './CaseStudyCard'
import styles from './CaseStudyGrid.module.css'

export default function CaseStudyGrid({ studies }) {
  return (
    <div className={styles.grid}>
      {studies.map((study, i) => (
        <CaseStudyCard key={study.id} study={study} index={i} />
      ))}
    </div>
  )
}
