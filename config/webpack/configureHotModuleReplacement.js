var webpack = require('webpack');
var merge = require('webpack-merge');
var argv = require('yargs').argv;

// only active HMR when using `./bin/webpack-dev-server --hot` to start the server
function configureHotModuleReplacement(config) {
  if(argv["hot"]){
    console.log('Actived HMR with react-hot-loader, should start rails server using `WEBPACK_DEV_SERVER=true ./bin/rails s`');
  }else{
    return config; // do nothing
  }

  let webpackDevServerAddr = process.env['WEBPACK_DEV_SERVER_ADDR'] || 'http://localhost:8080/'
  config = merge(
    config,
    {
      output: {
        publicPath: webpackDevServerAddr // needed for HMR to know where to load the hot update chunks
      },
      plugins: [
        new webpack.NamedModulesPlugin()
      ]
    }
  )

  config.module.rules = config.module.rules.map( rule => {
    if (rule.loader === 'babel-loader') {
      return merge(rule, {options: {plugins: ['react-hot-loader/babel']}})
    } else {
      return rule
    }
  })

  for (let key of Object.keys(config.entry)) {
    if (!(config.entry[key] instanceof Array)) {
      config.entry[key] = [config.entry[key]]
    }
    config.entry[key].unshift('react-hot-loader/patch')
  }
  return config
}

module.exports = configureHotModuleReplacement
