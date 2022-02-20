module.exports = {
  rules: {
    'no-mutating-methods': require('./src/rules/no-mutating-methods'),
    'ast-learning': require('./src/rules/ast-learning'),
  },
  configs: {
    selectors: require('./src/configs/selectors'),
  },
};
