# @beyonk/rollup-plugin-generate-html-esm

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/rollup-plugin-html-es.svg?style=shield)](https://circleci.com/gh/beyonk-adventures/rollup-plugin-html-es)

Simple rollup plugin to generate html file and inject your output module into it. Supports ES Modules / Code-splitting. Currently html file will be placed in same directory as the output file.
This plugin is inspired from [rollup-plugin-generate-html](https://github.com/zenoplex/rollup-plugin-generate-html).

## Installation

```bash
npm install --save-dev @beyonk/rollup-plugin-html-esm
```

## Usage

```js
import html from '@beyonk/rollup-plugin-html-esm'

export default [{
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
  plugins: [
    html({
      // specify template html (optional)
      template: './index.html',  // Default undefined
      // output filename (optional)
      filename: 'some.html', // Default index.html
      // when specified, js src will use absolute path from publicPath (optional)
      publicPath: 'dist' // Default undefined
    })
  ]
}]
```

### Advanced usage

For cases when you want to generate html file per output. This should come in handy when you want to generate book example codes and such.

```js
import glob from 'glob'
import html from '@beyonk/rollup-plugin-html-es'

const configs = glob
  .sync('src/**/index.js')
  .map(input => ({
    input,
    output: [{ file: input.replace(/^src/, 'dist'), format: 'umd' }],
    plugins: [html()],
  }))

export default configs
```
