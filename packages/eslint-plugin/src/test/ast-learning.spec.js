import { ESLintUtils, TSESLint } from '@typescript-eslint/utils';
import * as parser from '@typescript-eslint/parser';
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

describe('ast-learning', () => {
  const linter = new TSESLint.Linter();
  linter.defineRule('ast-learning', rule);
  linter.defineParser('@typescript-eslint/parser', parser);

  function testOutput(code, output) {
    it(code, () => {
      const result = linter.verifyAndFix(
        code,
        {
          rules: {
            'ast-learning': ['error'],
          },
          parser: '@typescript-eslint/parser',
          parserOptions: {
            ecmaFeatures: {
              jsx: true,
            },
          },
        },
        {
          fix: true,
        },
      );

      expect(result.messages).toHaveLength(0);
      expect(result.output).toBe(output);
    });
  }

  testOutput(
    'const foo = shallow<typeof div>(<div />);',
    'const foo = shallow<typeof div>(<div />);',
  );

  testOutput(
    'const foo = shallow(<div />);',
    'const foo = shallow<typeof div>(<div />);',
  );
});
