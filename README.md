# study-eslint

A template for study how to use ESLint selectors and write your own ESLint rules.

## Install

```
# if you don't have pnpm
$ npm i -g pnpm
$ pnpm install
```

## Run ESLint

```shell
$ pnpm lint
```

## Test ESLint rule

```shell
$ cd packages/eslint-plugin
# run vitest
$ pnpm test:v
# or run jest
$ pnpm test:j
```

## Add your own selectors

Edit `packages/eslint-plugin/src/configs/selectors.js` and run `pnpm lint` again.

## Write your own rules

1. Add your rule to `packages/eslint-plugin/src/rules/your-own-rule.js`.
2. Import your rule into `packages/eslint-plugin/index.js`.
   ```
   rules: {
     'your-own-rule': require('./src/rules/your-own-rule'),
   },
   ```
3. Add it into `packages/my-app/.eslintrc.js`.
   ```
   rules: {
     '@study-eslint/your-own-rule': 'error',
   },
   ```

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
