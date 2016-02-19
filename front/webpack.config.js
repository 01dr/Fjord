/**
 * Created by amazi on 19.02.2016.
 */

'use strict';

var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var normalize = require('postcss-normalize');
var fonts = require('postcss-font-magician');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        jsx: "./src/index.jsx",
        jade: "file?name=index.html!jade-html!./src/index.jade"
    },
    output : {
        path: __dirname + "/target",
        filename : "bundle.js",
        library: "index"
    },
    devtool: NODE_ENV == 'development' ? "cheap-eval-source-map":null,

    watch: NODE_ENV == 'development',

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru')
        }),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|vendor)/,
                loader: 'babel-loader',
                query:
                {
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|vendor)/,
                loader: 'babel-loader',
                query:
                {
                    presets:['react', 'es2015']
                }
            },
            {
                test: /\.pcss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?name=./images/[name].[ext]&context=./target!',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    postcss: function() {
        return [autoprefixer, precss, normalize]
    }

};

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    )
}