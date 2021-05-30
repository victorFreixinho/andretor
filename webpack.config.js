const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },
  module: {
    rules:[{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    },
    { test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    hot: true
  }
}