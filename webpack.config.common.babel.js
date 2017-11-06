import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import WebpackAutoInject from 'webpack-auto-inject-version';


var config = module.exports = new WebpackConfig().merge({
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    context:  path.join(__dirname,'/'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['eslint-loader'],
                exclude: /(node_modules)/
            },
            { test: /\.js$/,
                loader: 'baggage-loader?[file].html' },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader'
                }]},
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(eot|ttf|woff|woff2|svg|otf|json)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?publicPath=../&name=./assets/provider/[name].[ext]',
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                    loader:'babel-loader',
                    options:{
                        presets: ['es2015']
                    }
                }]
            }
        ]
    },
    plugins: [
        new WebpackAutoInject({
            // options
            // example:
            PACKAGE_JSON_PATH: './package.json',
            components: {
                AutoIncreaseVersion: true
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),

        new HtmlWebpackPlugin({
            title: 'index',
            template: './template_ejs/index.ejs',
            inject: 'body'
        })
    ]
});
