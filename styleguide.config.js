const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  title: 'Pubean Components',
  version: '0.1.0',
  components: 'components/**/*.js',
  styleguideDir: 'docs',
  assetsDir: 'assets',
  require: ['babel-polyfill', './styles/main.scss'],
  usageMode: 'expand',
  exampleMode: 'expand',
  ribbon: {
    url: 'https://github.com/pubean/components',
    text: 'Fork me on GitHub',
  },
  template: {
    favicon: 'favicon.ico',
  },
  theme: {
    fontFamily: {
      base: [
        'Chinese Quote',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'PingFang SC',
        'Hiragino Sans GB',
        'Microsoft YaHei',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      monospace: ['Dank Mono', 'Operator Mono', 'Fantasque Sans Mono', 'Fira Code', 'monospace'],
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: isDev ? ['style-loader', 'css-loader'] : [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: isDev
            ? ['style-loader', 'css-loader', 'sass-loader']
            : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: isDev ? 'img/[name].[ext]' : 'img/[name].[hash:8].[ext]',
          },
        },
        {
          test: /\.svg(\?.*)?$/,
          exclude: /node_modules/,
          loader: 'svg-url-loader',
          options: {
            limit: 2048,
            noquotes: true,
            stripdeclarations: true,
            name: isDev ? 'img/[name].[ext]' : 'img/[name].[hash:8].[ext]',
          },
        },
        {
          test: /\.(eot|ttf|otf|woff2?)(\?.*)?$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: isDev ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:8].[ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDev ? 'css/[name].css' : 'css/[name].[contentHash:8].css',
        chunkFilename: isDev ? 'css/[name].css' : 'css/[name].[contentHash:8].css',
      }),
    ],
  },
};
