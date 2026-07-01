

import { useState, useEffect } from 'react'
import styles from './BlogNavbar.module.css'

export default function BlogNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={`${styles.nav} container`}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoCircle}>
              <img src="/logo.png" alt="ThreeDigital" className={styles.logoImg} />
            </span>
          </a>

          <div className={styles.links}>
            <a href="/case-studies" className={styles.link}>Case Studies</a>
            <a href="/blog" className={`${styles.link} ${styles.linkActive}`}>Blog</a>
            <a href="/#contact" className={styles.link}>Contact</a>
          </div>

          <button
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={`${styles.burger} ${styles.burgerOpen} ${styles.mobileClose}`}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
          <div className={styles.mobileLinks}>
            <a href="/case-studies" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              Case Studies
            </a>
            <a href="/blog" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a href="/#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  )
}
