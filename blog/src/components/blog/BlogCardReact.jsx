import styles from './BlogCard.module.css'

function getImageSrc(image) {
  if (!image) return null
  if (typeof image === 'string') return image
  return null
}

const categoryColors = {
  seo: 'var(--mint)',
  'ai-in-marketing': 'var(--lavender)',
}

export default function BlogCardReact({ post, basePath = '/blog' }) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  const categoryName = post.categories?.[0]?.title
  const categorySlug = post.categories?.[0]?.slug?.current
  const accentColor = categoryColors[categorySlug] || 'rgba(0, 0, 0, 0.06)'
  const imageSrc = getImageSrc(post.mainImage)
  const authorSrc = getImageSrc(post.author?.image)

  return (
    <article className={styles.card} style={{ '--card-accent': accentColor }}>
      <a href={`${basePath}/${post.slug.current}`} className={styles.cardLink}>
        {imageSrc && (
          <div className={styles.imageWrap}>
            <img
              src={imageSrc}
              alt={post.mainImage?.alt || post.title}
              width={800}
              height={450}
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.meta}>
            {categoryName && <span className={styles.category}>{categoryName}</span>}
            {date && <span className={styles.date}>{date}</span>}
          </div>
          <h3 className={styles.title}>{post.title}</h3>
          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
          <div className={styles.footer}>
            {post.author && (
              <div className={styles.author}>
                {authorSrc && (
                  <img
                    src={authorSrc}
                    alt={post.author.name}
                    width={28}
                    height={28}
                    className={styles.authorAvatar}
                  />
                )}
                <span className={styles.authorName}>{post.author.name}</span>
                {post.estimatedReadingTime && (
                  <span className={styles.readTime}>{post.estimatedReadingTime} min read</span>
                )}
              </div>
            )}
            <span className={styles.cta}>
              Read more <span className={styles.ctaArrow}>&rarr;</span>
            </span>
          </div>
        </div>
      </a>
    </article>
  )
}
