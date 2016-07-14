var webpack = require('webpack');
module.exports = {
  externals: {
    'cheerio': 'window',
    'react/src/ExecutionEnvironment': true,
    'react/src/ReactContext': true,
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },
  output: {
    path: './public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}
