const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

if (process.env.NODE_ENV === 'production') {
  console.log('\n\nLooks like we are in prod mode!\n\n');
}

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: 'https://filipemerker.github.io/module-federation-styleguide/',
    path: path.join(__dirname, 'docs')
  }
})