const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-1"]
        }
      }
    ]
  }
  // ,
  // devServer: {
  //   port: 3001,
  //   contentBase: path.resolve(__dirname, 'public'),
  //   inline: true
  // }
}
