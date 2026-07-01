const fill = document.querySelector('.reading-progress-fill')
if (fill) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight
    if (h > 0) fill.style.width = Math.min((window.scrollY / h) * 100, 100) + '%'
  }, { passive: true })
}
