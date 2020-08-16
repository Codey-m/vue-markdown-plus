const path = require('path');
const webpack = require('webpack');
const version = require("./package.json").version;
const banner =
  "vue-markdown-plus v" + version + "\n" +
  "https://github.com/6etacat/vue-markdown-plus\n" +
  "MIT License";

module.exports = {
  entry: './src/VueMarkdownPlus.js',
  target: 'web',
  mode: 'development',
  performance: { hints: false },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-markdown-plus.js',
    library: 'VueMarkdownPlus',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ],
  },
};
