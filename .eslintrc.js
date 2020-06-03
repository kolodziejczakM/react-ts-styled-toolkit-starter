module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:react/recommended', // to avoid problems with jsx
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        '@typescript-eslint/no-non-null-assertion': 0, // Sometimes TS is not seeing that something cannot be possibly null so !. is great option here
        '@typescript-eslint/no-explicit-any': 0, // Sometimes defining something as any isn't that bad e.g. (document as any).getElementById('root')
        '@typescript-eslint/no-empty-interface': 0, // To have already pre-defined Props & State interfaces in boilerplate component code
        '@typescript-eslint/interface-name-prefix': 0, // I don't consider prefixing interfaces names with "I" bad thing
        'react/react-in-jsx-scope': 0, // We don't need react imports in preact
        '@typescript-eslint/explicit-function-return-type': 0, // There are lots of reasons to let TypeScript infer types instead of adding them explicitly
    },
    settings: {
        react: {
            version: '16.9', // to avoid getting warnings about not defined react version in eslint-plugin-react settings
        },
    },
};
