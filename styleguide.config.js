const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line

const isDev = process.env.NODE_ENV === 'development';

// Respect user's environment
const presetEnv = [
  '@babel/preset-env',
  {
    loose: true,
    debug: false,
    modules: false,
    useBuiltIns: 'usage',
    targets: {
      node: 'current',
      esmodules: false,
    },
  },
];

// JSX enabled
const presetReact = [
  '@babel/preset-react',
  {
    development: isDev,
  },
];

// Living on the edge
const plugins = [
  ['@babel/plugin-syntax-dynamic-import'],
  ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  ['@babel/plugin-proposal-class-properties'],
  ['@babel/plugin-proposal-export-default-from'],
  ['@babel/plugin-proposal-export-namespace-from'],
  ['@babel/plugin-proposal-logical-assignment-operators'],
  ['@babel/plugin-proposal-nullish-coalescing-operator'],
  ['@babel/plugin-proposal-numeric-separator'],
  ['@babel/plugin-proposal-optional-chaining'],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-throw-expressions'],
];

module.exports = {
  title: 'Pubean Components',
  version: '0.1.0',
  components: 'components/**/*.js',
  styleguideDir: 'docs',
  assetsDir: 'assets',
  require: ['babel-polyfill', './styles/main.scss'],
  usageMode: 'expand',
  ribbon: {
    url: 'https://github.com/pubean/components',
    text: 'Fork me on GitHub',
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [presetEnv, presetReact],
              plugins,
            },
          },
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
