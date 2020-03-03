require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniExtractCssPlugin = require('mini-css-extract-plugin')
console.log(process.env.NODE_ENV)
module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: ['webpack-hot-middleware/client?reload=true', './client/index.js'],
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'server/public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniExtractCssPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new vueLoaderPlugin(),
        new MiniExtractCssPlugin({
            filename: 'app.css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
