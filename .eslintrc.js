process.chdir(__dirname);

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
    codeFrame: false,
  },
  extends: [
    'airbnb-base',
    'plugin:fsd/all',
  ],
  rules: {
    'fsd/hof-name-prefix': 'error',
    'fsd/no-heavy-constructor': 'error',
    'fsd/jq-cache-dom-elements': 'error',
    'fsd/jq-use-js-prefix-in-selector': 'error',
    'fsd/no-function-declaration-in-event-listener': 'error',
    'fsd/split-conditionals': 'error',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'no-continue': 'off',
  },
};
