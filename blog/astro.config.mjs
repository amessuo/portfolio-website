import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.oussamabettaieb.com',
  base: '/blog',
  integrations: [react(), sitemap()],
  vite: {
    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },
  },
})
