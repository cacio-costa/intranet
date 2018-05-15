const path = require('path');
const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');
const extractText = require('extract-text-webpack-plugin');

const ambiente = require('./webpack/ambiente');
const criaPlugins = require('./webpack/plugins');
const configuraSecoes = require('./webpack/secoes');

const plugins = criaPlugins();
if (process.env.NODE_ENV == 'production') {
    ambiente.configuraProducao(plugins);
}

let config = {
    entry: {
        bundle: ['./src/index.js'],
        vendor: ['jquery', 'bootstrap', 'moment', 'urijs']
    },

    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.js', '.html'],
        alias: {
            assets: path.join(__dirname, 'assets')
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: extractText.extract({
                    use: [
                        {loader: "css-loader"},
                        {loader: "resolve-url-loader"},
                        {loader: "sass-loader?sourceMap"}
                    ], 
                    fallback: 'style-loader'
                }),
                exclude: new RegExp('node_modules')
            },
            {
                test: /\.css$/,
                use: extractText.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=24000&name=[name].[ext]&outputPath=assets/img/&publicPath=../../',
                include: path.resolve(__dirname, 'assets/img')
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)$/i,
                use: 'url-loader?limit=100000',
                include: path.resolve(__dirname, 'node_modules')
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&publicPath=../../'
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader'
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }  
        ]
    },

    plugins: plugins
};

configuraSecoes(config);

module.exports = config;