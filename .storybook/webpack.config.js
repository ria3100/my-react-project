const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const AntdScssThemePlugin = require('antd-scss-theme-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !isProduction,
              modules: true,
              camelCase: true,
              localIdentName: '[name]-[local]-[hash:base64:5]',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
            },
          }),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProduction,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !isProduction,
            },
          },
          AntdScssThemePlugin.themify('less-loader'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve('src/'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: './static',
        ignore: ['.*'],
      },
    ]),
    new AntdScssThemePlugin('./src/scss/theme.scss'),
  ],
}
