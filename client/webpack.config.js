// Webpack configuration for the repo
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'index.js'), // Entry point for our project
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules'
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map'
}
