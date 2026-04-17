import { useSmoothScroll } from '../hooks/useSmoothScroll'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import CaseStudyCarousel from '../components/home/CaseStudyCarousel'
import Testimonials from '../components/home/Testimonials'
import BookACall from '../components/home/BookACall'
import RevealOnScroll from '../components/shared/RevealOnScroll'
import styles from './HomePage.module.css'

export default function HomePage() {
  const scrollTo = useSmoothScroll()

  return (
    <main className={styles.page}>
      <Hero />
      <Services />
      <CaseStudyCarousel />

      {/* CTA divider */}
      <div className={styles.ctaDivider}>
        <RevealOnScroll>
          <button onClick={() => scrollTo('contact')} className={styles.ctaButton}>
            Get in touch
          </button>
        </RevealOnScroll>
      </div>

      <Testimonials />
      <BookACall />
    </main>
  )
}
