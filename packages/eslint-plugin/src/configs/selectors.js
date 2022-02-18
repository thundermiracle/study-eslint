module.exports = {
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector:
          'CallExpression > MemberExpression[object.type=/ArrayExpression|Identifier/][property.name=/forEach|map|reduce|flat|flatMap/]',
        message: 'How about using FP library ramda.js?',
      },
    ],
  },
};
