const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  console.log('\n\nLooks like we are not in prod mode!\n\n');
}

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 3006,
  },
  output: {
    publicPath: 'http://localhost:3006/',
    path: path.join(__dirname, 'docs')
  },
})