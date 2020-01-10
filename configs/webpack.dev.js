const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
<<<<<<< HEAD
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
=======
// const VueLoaderPlugin = require('../src/webpackLoaders/vue-loader/plugin.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const packageConfig = require('../package.json');
>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
module.exports = {
    mode: 'development',
    // mode:'production',
    entry: {
        main: ["./src/main.js"],
<<<<<<< HEAD
        main1: ["./src/main1.js"]
=======
        // main1: ["./src/main1.js"]
>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../built'),
    },
    // 扩容
    performance: {
        hints: 'warning',
        maxEntrypointSize: 5000000,
        maxAssetSize: 3000000
    },
    devServer: {
        historyApiFallback: true,
        clientLogLevel: 'info',
        host: '0.0.0.0',
        port: 8086,
        open: false,
        contentBase: path.resolve(__dirname, '../'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.tsx', '.ts', '.vue', '.jpg'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
<<<<<<< HEAD

            // {
            //   test:/\.(vue|js)$/,
            //   loader:'eslint-loader',
            //   enforce:'pre',
            //   include:[path.resolve(__dirname,'../src')],
            //   options:{
            //       formatter:require('eslint-friendly-formatter'),
            //       emitWarning:true
            //   }
            // },
=======
            {
                test: /\.(jpg|png|jpeg)$/,
                use: {
                    loader: 'url-loader'
                },
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../static')
                ]
            },
>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
            {
                test: /\.(ts|js)?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
<<<<<<< HEAD

            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(vue)?$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            //   {
            //       test:/\.(vue|js)/,
            //       use:{
            //           loader:path.resolve(__dirname,'../src/webpackLoaders/loaderTest.js'),
            //           options:{
            //               name:'alice A'
            //           }
            //       },
            //       include:[path.resolve(__dirname,'../src')]
            //   },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            {
                test: /\.(jpg|png|jpeg)$/,
                use: ['url-loader'],
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../static')
                ]
            }
=======
            {
                test: /\.(ts|tsx)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.(vue)?$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            // {
            //     test: /\.(vue|js)/,
            //     use: {
            //         loader: path.resolve(__dirname, '../src/webpackLoaders/loaderTest.js'),
            //         options: {
            //             formatter: require('eslint-friendly-formatter'),
            //             name: 'alice A'
            //         }
            //     },
            //     include: [path.resolve(__dirname, '../src')]
            // },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../src')
                ]
            },
            //   {
            //       test:/\.(jpg|png|jpeg)$/,
            //       use:['url-loader'],
            //       include:[
            //           path.resolve(__dirname,'../src'),
            //           path.resolve(__dirname,'../static')
            //       ]
            //   },

>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
        ]
    },
    devtool: 'inline-source-map',

    // optimization:{
    //     // 抽取共用代码
    //   splitChunks:{
    //       cacheGroups:{
    //           commons:{
    //               chunks:'all',
    //               name:'vendor',
    //               test:/[\\/]node_modules[\\/]/
    //           }
    //       }
    //   },
    //     // 默认开启压缩代码
    //   minimizer:[
    //       // 优化合并压缩css
    //       new OptimizeCSSAssetsPlugin({}),
    //       // production模式下，webpack4会自动压缩js文件
    //       // js文件压缩插件
    //       new UglifyJsPlugin({
    //           cache:true,
    //           parallel:true,
    //           sourceMap:true
    //       })
    //   ]
    // },
    plugins: [
        new CleanWebpackPlugin(['built'], {
            root: path.resolve(__dirname, '..'),
            dry: false
        }),
        new HtmlWebpackPlugin({
            title: 'mypj6 management',
            template: './template.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default']
<<<<<<< HEAD
=======
        }),
        new FriendlyErrorsPlugin({
            onErrors: createNotifierCallback()
>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
        })
        // new MinCssExtractPlugin({
        //     filename:'[name].[hash].css'
        // })
    ],
    stats: 'none'
<<<<<<< HEAD
=======
}

function createNotifierCallback() {
    const notifier = require('node-notifier');

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || ''
        })
    }
>>>>>>> 3f327b9fed00b6a98a368da9bae7486ebf136364
}