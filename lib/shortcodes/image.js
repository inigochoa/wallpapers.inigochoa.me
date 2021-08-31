const Image = require('@11ty/eleventy-img'),
  path = require('path')

module.exports = async (src, alt) => {
  let metadata = await Image(src, {
    widths: [600],
    formats: [null, 'webp'],
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)

      return `${name}-${width}w.${format}`
    },
    outputDir: '_site/assets/images/wallpapers/',
    urlPath: '/assets/images/wallpapers/',
  })

  let imageAttributes = {
    alt,
    loading: 'lazy',
    decoding: 'async',
  }

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline',
  })
}
