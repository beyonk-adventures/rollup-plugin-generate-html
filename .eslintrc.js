module.exports = {
  parser: 'babel-eslint',
  extends: '@beyonk/eslint-config',
  plugins: ['import'],
  env: {
    node: true,
    jest: true,
    browser: true,
  }
};
