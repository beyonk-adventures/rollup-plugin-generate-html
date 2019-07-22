import * as fs from 'fs'
import * as path from 'path'
// import cheerio from 'cheerio';
// @see https://github.com/cheeriojs/cheerio/issues/1058
const cheerio = require('cheerio')

export default function plugin (config) {
  const { filename, publicPath, template } = config

  return {
    name: 'generate-html-es',
    generateBundle (options, bundle) {
      const file = Object.keys(bundle)[0]
      const parsedPath = path.parse(file)
      const htmlPath = path.resolve(publicPath, filename)

      const src = publicPath
        ? `/${path.relative(publicPath, file)}`
        : `./${parsedPath.name}${parsedPath.ext}`

      const $ = cheerio.load(template
        ? fs.readFileSync(template).toString()
        : '')

      const body = $('body')
      const script = `<script type="module" src="${src}"></script>\n`
      body.append(script)

      fs.writeFileSync(htmlPath, $.html())
    }
  }
}
