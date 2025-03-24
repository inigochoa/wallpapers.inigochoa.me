import type { SitemapItem, SitemapOptions } from '@astrojs/sitemap'
import { ChangeFreqEnum } from '@astrojs/sitemap'

const config: SitemapOptions = {
  serialize(item: SitemapItem) {
    item.changefreq = ChangeFreqEnum.YEARLY

    return item
  },
}

export default config
