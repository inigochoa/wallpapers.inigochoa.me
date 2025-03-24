// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

import site from './src/data/site'
import robotsConfig from './src/lib/robotsConfig'
import sitemapConfig from './src/lib/sitemapConfig'

export default defineConfig({
  experimental: {
    svg: true,
  },
  image: {
    domains: ['raw.githubusercontent.com'],
  },
  integrations: [
    mdx(),
    robotsTxt(robotsConfig),
    sitemap(sitemapConfig),
  ],
  redirects: {
    '/licenses': `${site.repository.path}/LICENSE.md`,
  },
  site: 'https://wallpapers.inigochoa.me/',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
