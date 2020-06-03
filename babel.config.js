const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-react-jsx',
    [
        'module-resolver',
        {
            alias: {
                '@': './src',
            },
        },
    ],
];

const presets = [
    '@babel/typescript',
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current', // this solves: "ReferenceError: regeneratorRuntime is not defined"
            },
            bugfixes: true,
        },
    ],
];

module.exports = {
    plugins,
    presets,
};
