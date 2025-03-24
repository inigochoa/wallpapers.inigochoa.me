interface Media {
  bluesky: string
  twitter: string
}

interface Chef {
  from: string
  media: Media
  name: string
  url: string
}

interface Meta {
  description: string
  name: string
  themeColor: string
}

interface Repository {
  base: string
  json: string
  path: string
}

export default interface Site {
  chef: Chef
  meta: Meta
  repository: Repository
}
