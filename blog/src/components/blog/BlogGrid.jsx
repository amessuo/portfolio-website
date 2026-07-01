import { useState, useMemo } from 'react'
import BlogCardReact from './BlogCardReact'
import SearchBar from './SearchBar'
import CategoryFilter from './CategoryFilter'
import Pagination from './Pagination'
import styles from './BlogGrid.module.css'

const POSTS_PER_PAGE = 6

export default function BlogGrid({ posts, categories, excludeId }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPosts = useMemo(() => {
    let result = posts

    if (excludeId) {
      result = result.filter((post) => post._id !== excludeId)
    }

    if (activeCategory) {
      result = result.filter((post) =>
        post.categories?.some((cat) => cat.slug.current === activeCategory)
      )
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(q))
      )
    }

    return result
  }, [posts, searchQuery, activeCategory, excludeId])

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handleCategorySelect = (slug) => {
    setActiveCategory(slug)
    setCurrentPage(1)
  }

  return (
    <>
      <div className={styles.toolbar}>
        <SearchBar onSearch={handleSearch} />
        {categories.length > 0 && (
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={handleCategorySelect}
          />
        )}
      </div>

      {paginatedPosts.length > 0 ? (
        <div className={styles.grid}>
          {paginatedPosts.map((post) => (
            <BlogCardReact key={post._id} post={post} basePath="/blog" />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p className={styles.emptyText}>No articles match your search.</p>
          <button
            className={styles.emptyBtn}
            onClick={() => {
              setSearchQuery('')
              setActiveCategory(null)
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  )
}
