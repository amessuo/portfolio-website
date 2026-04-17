import { Link } from 'react-router-dom'
import RevealOnScroll from '../shared/RevealOnScroll'
import MagneticButton from '../shared/MagneticButton'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.inner} container`}>
        <RevealOnScroll>
          <span className={`label ${styles.label}`}>Get In Touch</span>
          <h2 className={styles.heading}>
            Ready to grow<br />your business?
          </h2>
          <p className={styles.description}>
            Grow your business with us! Contact us today without hesitation.
            Let's discuss how we can elevate your digital presence together.
          </p>

          <div className={styles.links}>
            <a href="mailto:hello@threedigital.com" className={styles.emailLink}>
              hello@threedigital.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn &rarr;
            </a>
          </div>

          <MagneticButton className={styles.ctaWrap}>
            <Link to="/case-studies" className={styles.cta}>
              Get Started
            </Link>
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  )
}
