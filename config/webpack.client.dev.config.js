const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: {
        main: ['core-js/fn/promise','./src/index.js'],        
    },

    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
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



	module: {
		rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',

                    }
                ],
                exclude:  /node_modules/
            },


           {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                },
            ]
           },

           {
               test: /\.html$/,
               use: [
                {
                    loader: 'html-loader',
                },      
               ]
           },


           {
               test: /\.(jpg|gif|png)$/,
               use: [
                {

                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]-[hash:8]'
                    }
                }

               ]
           }


		],
    },
    
    plugins: [
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