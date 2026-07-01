export const POSTS_PER_PAGE = 6

export const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  estimatedReadingTime,
  "author": author->{name, image, role},
  "categories": categories[]->{ _id, title, slug }
}`

export const paginatedPostsQuery = `{
  "posts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    estimatedReadingTime,
    "author": author->{name, image, role},
    "categories": categories[]->{ _id, title, slug }
  },
  "total": count(*[_type == "post" && defined(slug.current)])
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  estimatedReadingTime,
  body,
  aiSummary,
  keyTakeaway,
  primaryKeyword,
  seoTitle,
  seoDescription,
  "author": author->{name, image, role, bio},
  "categories": categories[]->{ _id, title, slug },
  "headings": body[style in ["h2", "h3"]] {
    "text": children[0].text,
    "style": style,
    "key": _key
  }
}`

export const relatedPostsQuery = `*[_type == "post" && slug.current != $slug && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  estimatedReadingTime,
  "author": author->{name, image, role},
  "categories": categories[]->{ _id, title, slug }
}`

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug
}`

export const postsByCategoryQuery = `*[_type == "post" && defined(slug.current) && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  estimatedReadingTime,
  "author": author->{name, image, role},
  "categories": categories[]->{ _id, title, slug }
}`
