const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pluginsConfig = require('./shared/webpack.client.plugins.config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const clientConfig = {
    entry: {
        main: ['webpack-hot-middleware/client?reload=true','core-js/fn/promise','./src/index.js'],        
    },

    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/'
    },

    devServer: {
        contentBase: 'dist',
        overlay: true,
        hot: true,
        stats: {
            colors: true
        }
    },

    devtool: 'source-map',

    
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns : [
                '**/*',
            ]
        }),

        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }         
        }),

        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',

        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            //both options are optional
            filename: "App.css",
            chunkFilename: "",  
        }),
    
    ],


}


module.exports =  merge(pluginsConfig, clientConfig);