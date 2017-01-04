var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: __dirname + '/src/app',
    entry: {
        app: './js/app.js',
        vendor: ['angular', 'angular-route']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: "/proveedores",
        filename: 'js/app.bundle.js'
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.bundle.js"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
            exclude: ['']
        })
    ]
};