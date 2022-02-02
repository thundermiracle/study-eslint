module.exports = {
  rules: {
    'no-mutating-methods': require('./src/rules/no-mutating-methods'),
  },
  configs: {
    selectors: require("./src/configs/selectors"),
  }
};
