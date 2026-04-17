import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const scrollTo = useSmoothScroll()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (id) => {
    if (isHome) {
      scrollTo(id)
    } else {
      navigate('/')
      setTimeout(() => scrollTo(id), 100)
    }
    setIsOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoCircle}>
            <img src="/logo.png" alt="ThreeDigital" className={styles.logoImg} />
          </span>
        </Link>

        <div className={styles.links}>
          <Link to="/case-studies" className={styles.link}>Case Studies</Link>
          <button onClick={() => handleNavClick('contact')} className={styles.link}>Contact</button>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileLinks}>
              {[
                { label: 'Contact', id: 'contact' },
              ].map((item, i) => (
                <motion.button
                  key={item.id}
                  className={styles.mobileLink}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to="/case-studies" className={styles.mobileLink}>
                  Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
