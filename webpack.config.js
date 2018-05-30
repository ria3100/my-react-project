const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

const vendor = [
  'loadable-components',
  'react',
  'react-dom',
  'react-helmet',
  'react-hot-loader',
  'react-router-dom',
]

const dist = __dirname + '/dist'

module.exports = {
  mode: 'development',
  entry: {
    index: [path.resolve(__dirname, 'src/index')],
    vendor,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist', 'js'),
    publicPath: '/js/',
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
        ],
      },
    ],
  },
  resolve: {
    // root: [
    //   path.resolve(__dirname, 'src'),
    //   path.resolve(__dirname, 'node_modules'),
    //   __dirname,
    // ],
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src/'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: '../static',
        ignore: ['.*'],
      },
    ]),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, './dist/index.html'),
      template: 'index.html',
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeTagWhitespace: true,
      },
    }),
    new GenerateSW({
      globDirectory: dist,
      globPatterns: ['js/**/*.js'],
      swDest: dist + '/sw.js',
      maximumFileSizeToCacheInBytes: 8 * 1024 * 1024, // 8MB
    }),
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.join(__dirname, '.'),
    // }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
  },
}
