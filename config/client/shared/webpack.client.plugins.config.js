const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

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

                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
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
}