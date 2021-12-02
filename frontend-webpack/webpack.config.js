'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',  // path to our input file
    output: {
        filename: 'index-bundle.js',  // output bundle file name
        path: path.resolve(__dirname, '../web/static'),  // path to our Django static directory
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"] }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'underscore',
        }),
    ],
};