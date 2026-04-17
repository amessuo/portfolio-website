import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const variants = {
  'fade-up': {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function RevealOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  stagger = 0.08,
  className,
  as = 'div',
}) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const prefersReduced = useReducedMotion()

  const MotionTag = motion[as] || motion.div

  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger,
      }}
    >
      {children}
    </MotionTag>
  )
}
