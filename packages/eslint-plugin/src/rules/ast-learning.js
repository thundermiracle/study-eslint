// @type-check
const { ESLintUtils } = require('@typescript-eslint/utils');

// base of: https://dev.to/alexgomesdev/writing-custom-typescript-eslint-rules-how-i-learned-to-love-the-ast-15pn
const rule = ESLintUtils.RuleCreator.withoutDocs({
  // defaultOptions: [],
  meta: {
    type: 'problem',
    fixable: 'whitespace',
    messages: {
      no_shallow_without_generic: 'Use shallow with generic type',
    },
    schema: [],
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (
          node.callee.type === 'Identifier' &&
          node.callee.name === 'shallow' &&
          !node.typeParameters
        ) {
          context.report({
            node,
            messageId: 'no_shallow_without_generic',
            fix: function (fixer) {
              if (node.arguments.length === 1) {
                const argumentFirstNode = node.arguments[0];
                if (argumentFirstNode.type !== 'JSXElement') {
                  return fixer.insertTextAfter(node.callee, '<any>');
                }

                if (
                  argumentFirstNode.openingElement.name.type === 'JSXIdentifier'
                ) {
                  const name = argumentFirstNode.openingElement.name.name;
                  return fixer.insertTextAfter(node.callee, `<typeof ${name}>`);
                }
              }
            },
          });
        }
      },
    };
  },
});

module.exports = rule;
