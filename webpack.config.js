const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        entry: './assets/src/index.js'
    },
    output: {
        path: __dirname + '/.tmp/public',
        filename: 'bundle.js'
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [                
                    { 
                        test: /\.js$/,
                        loader: 'babel-loader', 
                        exclude: '/node_modules/',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    },               
                    { 
                        test: /\.jsx$/, 
                        loader: 'babel-loader', 
                        exclude: '/node_modules/',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    },
                    {
                        use: ['style-loader', 'css-loader'],
                        test: /\.css$/,
                        
                    },
                    {
                        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                        use: [
                                {
                                    loader: 'file-loader',
                                    options: {
                                    name: '[path][name]-[hash:8].[ext]'
                                    },
                                },
                            ]
                    },
                ]
            },



    plugins: [
        new HtmlWebpackPlugin({
            template: 'assets/src/index.html'
        })
    ]
};