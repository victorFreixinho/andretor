const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/build/js/'),
    publicPath: '/public/static/js/',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
    },
    { test: /\.tsx?$/, loader: 'ts-loader' },
    {
      test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file-loader',
      options: {
        name: '/public/static/favicon/[name].[ext]',
      },
    }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: [
      path.join(__dirname, '/public/'),
      path.join(__dirname, '/public/static/favicon/'),
    ],
    compress: true,
    port: 3000,
    hot: true,
  },
}
