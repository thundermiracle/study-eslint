import { ESLintUtils } from '@typescript-eslint/utils';
import rule from '../rules/ast-learning';

const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('my-rule', rule, {
  valid: [
    {
      code: 'const foo = shallow<typeof div>(<div />);',
    },
  ],
  invalid: [
    {
      code: 'const foo = shallow(<div />);',
      errors: [
        {
          messageId: 'no_shallow_without_generic',
          line: 1,
        },
      ],
      output: 'const foo = shallow<typeof div>(<div />);',
    },
  ],
});
