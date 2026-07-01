import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanity.ts'
import styles from './PortableTextRenderer.module.css'

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const components = {
  block: {
    h2: ({ children, value }) => {
      const text = value.children?.[0]?.text || ''
      return <h2 id={slugify(text)} className={styles.h2}>{children}</h2>
    },
    h3: ({ children, value }) => {
      const text = value.children?.[0]?.text || ''
      return <h3 id={slugify(text)} className={styles.h3}>{children}</h3>
    },
    h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
    normal: ({ children }) => <p className={styles.p}>{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    number: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.li}>{children}</li>,
    number: ({ children }) => <li className={styles.li}>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code className={styles.inlineCode}>{children}</code>,
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      return (
        <a href={value?.href} target={target} rel={rel} className={styles.link}>
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className={styles.figure}>
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className={styles.image}
          />
          {value.caption && <figcaption className={styles.caption}>{value.caption}</figcaption>}
        </figure>
      )
    },
    code: ({ value }) => (
      <div className={styles.codeBlock}>
        {value.language && <span className={styles.codeLang}>{value.language}</span>}
        <pre className={styles.pre}>
          <code>{value.code}</code>
        </pre>
      </div>
    ),
  },
}

export default function PortableTextRenderer({ content }) {
  return (
    <div className={styles.article}>
      <PortableText value={content} components={components} />
    </div>
  )
}
