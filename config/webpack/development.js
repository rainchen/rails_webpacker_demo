// Note: You must restart bin/webpack-watcher for changes to take effect

var webpack = require('webpack')
var merge   = require('webpack-merge')

var sharedConfig = require('./shared.js')

var configureHotModuleReplacement = require('./configureHotModuleReplacement')
sharedConfig.config = configureHotModuleReplacement(sharedConfig.config)

module.exports = merge(sharedConfig.config, {
  devtool: 'sourcemap',

  stats: {
    errorDetails: true
  },

  output: {
    pathinfo: true
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
})
