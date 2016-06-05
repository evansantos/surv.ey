var ExtractTextPlugin = require('extract-text-webpack-plugin')
var postcss = require("postcss")
var webpack = require("webpack")

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
        loader: ExtractTextPlugin.extract('style', 'css?sourcemap!postcss')
      }
    ]
  },
  postcss: function() {
    return [
      require("lost"),
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-browser-reporter")(),
      require("postcss-reporter")()
    ];
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
