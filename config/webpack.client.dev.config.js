const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {

    entry: {
        main: ['./src/index.js'],        
    },

    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    devServer: {
        contentBase: 'dist',
        overlay: true
    },

	module: {
		rules: [
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
                    loader: 'file-loader',
                    options: {
                        name: '[name].html'
                    }
                },

                {
                    loader: 'extract-loader'
                },

                {
                    loader: 'html-loader'
                }
                
               ]
           }
		],
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            //both options are optional
            filename: "App.css",
            chunkFilename: "",  
        }),
    
    ],


}