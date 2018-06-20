/*
* @Author: yongze-chen
* @Date:   2018-06-20 11:06:05
* @Last Modified by:   yongze-chen
* @Last Modified time: 2018-06-20 13:38:34
*/

const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [

        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })

    ],
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader','css-loader']},
            { test: /\.scss$/, use:['style-loader','css-loader','sass-loader']},
            { test: /\.(jpg|jpeg|png|gif)$/, use: 'url-loader?limit=2917&name=[hash:8]-[name].[ext]'},
            { test: /\.(eot|ttf|woff|woff2|svg)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    }

}