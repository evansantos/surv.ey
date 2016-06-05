var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?sourcemap')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
