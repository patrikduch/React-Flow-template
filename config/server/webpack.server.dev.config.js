const path = require('path');

var nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: {
        main: ['./src/server/main.js'],        
    },

    target: 'node',
    mode: 'development',

    externals: [nodeExternals()],

    output: {
        filename: 'server.js',
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


	module: {
		rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',

                    }
                ],
            },
		],
    },
    
    plugins: [],
}