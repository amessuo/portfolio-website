import { useCallback } from 'react'

export function useSmoothScroll() {
  const scrollTo = useCallback((targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      const navHeight = 80
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return scrollTo
}
