import site from '../data/site'

class Wallpaper {
  author: string = ''
  path: string = ''

  getAlt(): string {
    return `${this.getName()} by ${this.author}`
  }

  getDownload(): string {
    return `Download ${this.getTitle()}`
  }

  getName(): string {
    let fileName = this.path.split('/').pop() ?? ''
    fileName = fileName.split('.').slice(0, -1).join('.')

    return fileName.split('-').join(' ')
  }

  getTitle(): string {
    return `${this.getName()} by ${this.author}`
  }

  getURL(): string {
    return `${site.repository.path}${this.path}`
  }

  setAuthor(author: string) {
    this.author = author

    return this
  }

  setPath(path: string) {
    this.path = path

    return this
  }
}

export default Wallpaper
