import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealOnScroll from '../components/shared/RevealOnScroll'
import BookACall from '../components/home/BookACall'
import caseStudies from '../data/caseStudies'
import styles from './CaseStudyDetail.module.css'

function MiniChart({ data, label }) {
  const [hovered, setHovered] = useState(null)

  if (!data || data.length < 2) return null

  const values = data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1

  const width = 400
  const height = 200
  const padX = 40
  const padY = 30
  const chartW = width - padX * 2
  const chartH = height - padY * 2

  const points = data.map((d, i) => ({
    x: padX + (i / (data.length - 1)) * chartW,
    y: padY + chartH - ((d.value - min) / range) * chartH,
  }))

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')
  const areaD = `${pathD} L${points[points.length - 1].x},${padY + chartH} L${points[0].x},${padY + chartH} Z`

  // Y-axis labels (3 ticks)
  const yTicks = [min, min + range / 2, max].map((v) => ({
    value: Math.round(v).toLocaleString(),
    y: padY + chartH - ((v - min) / range) * chartH,
  }))

  const tooltip = hovered != null ? {
    p: points[hovered],
    month: data[hovered].month,
    value: Math.round(data[hovered].value).toLocaleString(),
  } : null

  return (
    <div className={styles.chartContainer}>
      <span className={styles.chartLabel}>{label}</span>
      <svg viewBox={`0 0 ${width} ${height}`} className={styles.chartSvg}>
        {/* Grid lines */}
        {yTicks.map((t, i) => (
          <g key={i}>
            <line x1={padX} y1={t.y} x2={width - padX} y2={t.y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <text x={padX - 6} y={t.y + 4} textAnchor="end" fill="#999" fontSize="9" fontFamily="Karla, sans-serif">
              {t.value}
            </text>
          </g>
        ))}

        {/* Area fill */}
        <path d={areaD} fill="url(#chartGradient)" />

        {/* Line */}
        <path d={pathD} fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Hover guide line */}
        {tooltip && (
          <line x1={tooltip.p.x} y1={padY} x2={tooltip.p.x} y2={padY + chartH} stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="2 2" />
        )}

        {/* Dots */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={hovered === i ? 5 : 3.5}
            fill={hovered === i ? '#000' : '#fff'}
            stroke="#000"
            strokeWidth="1.5"
          />
        ))}

        {/* Hit targets (invisible, large) for hover */}
        {points.map((p, i) => (
          <circle
            key={`hit-${i}`}
            cx={p.x}
            cy={p.y}
            r="14"
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          />
        ))}

        {/* X-axis labels (first, middle, last) */}
        {[0, Math.floor(data.length / 2), data.length - 1].map((idx) => (
          <text
            key={idx}
            x={points[idx].x}
            y={height - 6}
            textAnchor="middle"
            fill="#999"
            fontSize="9"
            fontFamily="Karla, sans-serif"
          >
            {data[idx].month}
          </text>
        ))}

        {/* Tooltip */}
        {tooltip && (() => {
          const tipW = 78
          const tipH = 34
          let tx = tooltip.p.x - tipW / 2
          if (tx < padX) tx = padX
          if (tx + tipW > width - padX) tx = width - padX - tipW
          let ty = tooltip.p.y - tipH - 10
          if (ty < padY) ty = tooltip.p.y + 10
          return (
            <g pointerEvents="none">
              <rect x={tx} y={ty} width={tipW} height={tipH} rx="4" fill="#000" />
              <text x={tx + tipW / 2} y={ty + 14} textAnchor="middle" fill="#fff" fontSize="9" fontFamily="Karla, sans-serif">
                {tooltip.month}
              </text>
              <text x={tx + tipW / 2} y={ty + 27} textAnchor="middle" fill="#A9F7B8" fontSize="11" fontFamily="Karla, sans-serif" fontWeight="600">
                {tooltip.value}
              </text>
            </g>
          )
        })()}

        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A9F7B8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A9F7B8" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const study = caseStudies.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!study) return <Navigate to="/case-studies" replace />

  const topResults = study.results.slice(0, 3)

  return (
    <main className={styles.page}>
      {/* Breadcrumb */}
      <div className={`${styles.breadcrumb} container`}>
        <Link to="/case-studies" className={styles.breadcrumbLink}>Case Studies</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{study.client}</span>
      </div>

      {/* H1 */}
      <section className={styles.heroSection}>
        <div className="container">
          <motion.div
            className={styles.heroMeta}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.heroClient}>{study.client}</span>
            <span className={styles.heroPeriod}>{study.year}</span>
            {study.tags.map((tag) => (
              <span key={tag} className={styles.heroTag}>{tag}</span>
            ))}
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {study.title}
          </motion.h1>
        </div>
      </section>

      {/* Highlight Results Bar */}
      <section className={styles.highlightBar}>
        <div className={`${styles.highlightInner} container`}>
          {topResults.map((r, i) => (
            <motion.div
              key={i}
              className={styles.highlightItem}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <span className={styles.highlightValue}>{r.value}</span>
              <span className={styles.highlightMetric}>{r.metric}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two columns: Description | Chart */}
      <section className={styles.mainContent}>
        <div className={`${styles.mainGrid} container`}>
          <RevealOnScroll variant="fade-left" className={styles.descriptionCol}>
            <span className={styles.overline}>The Project</span>
            <p className={styles.bodyText}>{study.summary}</p>

            {study.challenge && (
              <>
                <span className={styles.overline}>The Challenge</span>
                <p className={styles.bodyText}>{study.challenge}</p>
              </>
            )}

            {study.approach && (
              <>
                <span className={styles.overline}>My Approach</span>
                <ol className={styles.approachList}>
                  {study.approach.map((step, i) => (
                    <li key={i} className={styles.approachItem}>
                      <span className={styles.approachNum}>{String(i + 1).padStart(2, '0')}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </RevealOnScroll>

          <RevealOnScroll variant="fade-right" className={styles.chartCol}>
            <MiniChart data={study.chartData} label={study.chartLabel} />

            {/* Key insights as compact list */}
            {study.keyInsights && (
              <div className={styles.insightsBox}>
                <span className={styles.overline}>Key Insights</span>
                <ul className={styles.insightsList}>
                  {study.keyInsights.map((insight, i) => (
                    <li key={i} className={styles.insightItem}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={styles.checkIcon}>
                        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* Client Testimonial — only render if one exists */}
      {study.testimonial && (
        <section className={styles.testimonialSection}>
          <div className="container">
            <RevealOnScroll>
              <div className={styles.testimonialCard}>
                <span className={styles.overline}>Client Testimonial</span>
                <blockquote className={styles.testimonialQuote}>
                  "{study.testimonial.quote}"
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{study.testimonial.author}</span>
                  <span className={styles.testimonialRole}>{study.testimonial.role}</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      <BookACall />
    </main>
  )
}
