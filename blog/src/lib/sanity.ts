import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET || import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = !!projectId && projectId !== 'placeholder'

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Resolve a cover/avatar field to a URL string. Accepts either a plain
// string URL (legacy/placeholder data) or a Sanity image object.
export function imageUrl(source: any, width = 1400): string | null {
  if (!source) return null
  if (typeof source === 'string') return source
  if (source.asset) return builder.image(source).width(width).url()
  return null
}
