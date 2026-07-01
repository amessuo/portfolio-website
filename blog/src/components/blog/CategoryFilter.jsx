

import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className={styles.filters}>
      <button
        className={`${styles.pill} ${!activeCategory ? styles.active : ''}`}
        onClick={() => onSelect(null)}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat._id}
          className={`${styles.pill} ${activeCategory === cat.slug.current ? styles.active : ''}`}
          onClick={() => onSelect(cat.slug.current)}
        >
          {cat.title}
        </button>
      ))}
    </div>
  )
}
