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
            Ready to grow? Get in touch today.
            Let's discuss how I can elevate your digital presence.
          </p>

          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/oussamabettaieb/"
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
