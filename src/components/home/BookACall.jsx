import { useEffect, useRef } from 'react'
import RevealOnScroll from '../shared/RevealOnScroll'
import styles from './BookACall.module.css'

const CALENDLY_URL =
  'https://calendly.com/oussema-bettaieb1903/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0b0b0b&primary_color=a9f7b8'

export default function BookACall() {
  const widgetRef = useRef(null)

  useEffect(() => {
    const init = () => {
      if (widgetRef.current && window.Calendly) {
        widgetRef.current.innerHTML = ''
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
        })
      }
    }

    if (window.Calendly) {
      init()
      return
    }

    const script = document.querySelector('script[src*="assets.calendly.com"]')
    if (script) {
      script.addEventListener('load', init)
      return () => script.removeEventListener('load', init)
    }
  }, [])

  return (
    <section id="contact" className={styles.section}>
      <div className={`${styles.inner} container`}>
        <RevealOnScroll variant="fade-left" className={styles.textSide}>
          <span className={styles.overline}>Contact</span>
          <h2 className={styles.heading}>Book a call now</h2>
          <p className={styles.description}>
            Ready to discuss your project? Schedule a free consultation and let's
            explore how we can grow your business together.
          </p>
          <div className={styles.contactInfo}>
            <a href="mailto:hello@threedigital.com" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
              hello@threedigital.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <svg className={styles.contactIcon} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-right" className={styles.calendarSide}>
          <div ref={widgetRef} className={styles.calendarEmbed} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
