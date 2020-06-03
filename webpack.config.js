const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const Dotenv = require('dotenv-webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const pwaManifest = new WebpackPwaManifest({
    name: 'react-ts-starter',
    short_name: 'starter',
    description: 'React boilerplate',
    background_color: '#ffffff',
    crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
    icons: [],
});

const htmlPluginSetup = new HtmlWebpackPlugin({
    template: './src/index.html',
});

const development = {
    entry: './src/index.tsx',
    mode: 'development',
    name: 'dev', // used in npm scripts
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval',
    stats: {
        colors: true,
        entrypoints: false,
        modules: false,
    },
    devServer: {
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(webp|png|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        pwaManifest,
        new CircularDependencyPlugin({
            exclude: /node_modules/,
        }),
    ],
};

const production = {
    ...development,
    devServer: undefined,
    mode: 'production',
    name: 'prod',
    devtool: 'source-maps',
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new Dotenv(), // NOTE: It's recommended to declare your production envs outside application code.
        pwaManifest,
    ],
};

module.exports = [development, production];
