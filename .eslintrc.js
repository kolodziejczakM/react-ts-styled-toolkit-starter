module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:react/recommended', // To avoid problems with jsx parsing
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for parsing modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        '@typescript-eslint/no-non-null-assertion': 0, // Sometimes TS is not seeing that something cannot be possibly null so !. operator is great option here
        '@typescript-eslint/no-empty-interface': 0, // To have already pre-defined Props & State interfaces in boilerplate component code
        '@typescript-eslint/interface-name-prefix': 0, // I don't consider prefixing interface names with "I" a bad thing
        '@typescript-eslint/explicit-function-return-type': 0, // There are lots of reasons to let TypeScript infer types instead of adding them explicitly
        '@typescript-eslint/explicit-module-boundary-types': 0, // Works similarly to (explicit-function-return-type) for functions that are exported,
    },
};
