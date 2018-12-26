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
  presets: [presetEnv, presetReact],
  plugins,
};
