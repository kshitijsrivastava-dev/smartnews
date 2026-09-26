export const categories = [
  { slug: 'national', label: 'National', gnewsCategory: 'nation' },
  { slug: 'international', label: 'International', gnewsCategory: 'world' },
  { slug: 'business', label: 'Business', gnewsCategory: 'business' },
  { slug: 'technology', label: 'Technology', gnewsCategory: 'technology' },
  { slug: 'sports', label: 'Sports', gnewsCategory: 'sports' },
  { slug: 'science', label: 'Science', gnewsCategory: 'science' },
  { slug: 'health', label: 'Health', gnewsCategory: 'health' },
  { slug: 'entertainment', label: 'Entertainment', gnewsCategory: 'entertainment' },
]

export function getCategoryBySlug(slug) {
  return categories.find((item) => item.slug === slug)
}

export function toGNewsCategory(slug) {
  return getCategoryBySlug(slug)?.gnewsCategory ?? ''
}
