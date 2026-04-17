import { motion, useReducedMotion } from 'framer-motion'

export default function SplitText({ text, className, as: Tag = 'h1', delay = 0 }) {
  const prefersReduced = useReducedMotion()
  const words = text.split(' ')

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  )
}
