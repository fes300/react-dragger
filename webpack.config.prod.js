const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: './src/app/components/Draggable/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new DashboardPlugin(),
    new CleanWebpackPlugin(['dist']),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: { loader: 'babel-loader' }
    }]
  }
}
