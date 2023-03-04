const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  devtool: process.env.NODE_ENV === 'development' ? 'eval-cheap-module-source-map' : false,
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: isDev ? '/' : './',
    clean: true,
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Blogger', template: './src/index.html' }),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve('./src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        type: 'asset',
        generator: {
          filename: isDev ? 'static/images/[name][ext][query]' : 'static/images/[hash][ext][query]',
        },
        parser: {
          dataUrlCondition: { maxSize: 10 * 1024 },
        },
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2).*$/i,
        type: 'asset',
        generator: {
          filename: isDev ? 'static/images/[name][ext][query]' : 'static/images/[hash][ext][query]',
        },
        parser: {
          dataUrlCondition: { maxSize: 10 * 1024 },
        },
      },
    ],
  },
}
