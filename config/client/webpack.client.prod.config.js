const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pluginsConfig = require('./shared/webpack.client.plugins.config');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const clientConfig = {

    entry: {
        main: ['core-js/fn/promise','./src/index.js'],        
    },

    mode: 'production',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../../dist'),
        publicPath: '/'
    },


    optimization: {
        minimize: true
    },
    
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',

        }),

        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
          
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            //both options are optional
            filename: "App.css",
            chunkFilename: "",  
        }),
    
    ],
}



module.exports = merge(pluginsConfig, clientConfig);