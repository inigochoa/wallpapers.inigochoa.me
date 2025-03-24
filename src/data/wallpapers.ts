import type image from '../types/image'
import type json from '../types/json'
import site from './site'
import Wallpaper from '../models/Wallpaper'

const JSON_URL = `${site.repository.path}${site.repository.json}`

export default async function getWallpapers(): Promise<Wallpaper[]> {
  try {
    const response = await fetch(JSON_URL)
    if (!response.ok) {
      return []
    }

    const data = await response.json() as json
    if (!data.images || !Array.isArray(data.images) || 0 === data.images.length) {
      return []
    }

    const wallpapers = data.images.map((img: image) => {
      const wallpaper =
        new Wallpaper()
          .setAuthor(img.author)
          .setPath(img.path)

      return wallpaper
    })

    return wallpapers
  } catch (error) {
    return []
  }
}
