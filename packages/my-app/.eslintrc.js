module.exports = {
  extends: [
    'plugin:@web-configs/typescript',
    'plugin:@web-configs/node',

    'plugin:@study-eslint/selectors',
  ],
  plugins: ['@study-eslint'],
  rules: {
    '@web-configs/images-no-direct-imports': 'off',
    '@study-eslint/no-mutating-methods': 'error',
    '@study-eslint/ast-learning': 'error',
  },
};
