# congenial-bassoon

Test app to tinker with testing

## Current failing test

- Run `npm install`
- Run `npm run test` and see the error

```bash
congenial-bassoon (main)
$ npm run test

> svelte-app@1.0.0 test
> jest

 FAIL  src/__tests__/App.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    congenial-bassoon\node_modules\svelte-spa-router\wrap.js:42
    export function wrap(args) {
    ^^^^^^

    SyntaxError: Unexpected token 'export'

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (node_modules/svelte-spa-router/Router.svelte:4:22)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.526 s
Ran all test suites.
```
