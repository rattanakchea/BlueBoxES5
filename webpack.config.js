console.log('webpack config');


var webpack = require('webpack');


module.exports = {
    entry: "./js/app.js",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/,
                loader: 'babel-loader',
            query: {presets: ['es2015']},
            exclude: '/node_modules/'
            }

        ]
    }
};