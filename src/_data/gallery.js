const fs = require('fs')
const path = require('path')

const folder = './src/_wallpapers/'
const lines  = fs.readFileSync(`${folder}LICENSE.md`, 'utf8')
  .split(/\r?\n/)

module.exports = fs
  .readdirSync(`${folder}images/`)
  .filter(filename => path.extname(filename).toLowerCase() === '.jpg')
  .map(filename => {
    let slug = path.parse(filename).name
    let line = lines.find(line => line.includes(`${slug} `))

    let title    = line.substring(line.lastIndexOf('- ') + 2, line.lastIndexOf(' <')).replace(/\-+/g, ' ')
    let original = line.substring(line.lastIndexOf('<') + 1, line.lastIndexOf('>'))

    return {
      alt: `Gallery image ${title}`,
      original,
      src: `${folder}images/${filename}`,
      title,
    }
  })
