const path=require('path');
const webpack=require('webpack');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin=require('optimize-css-assets-webpack-plugin');
const MinCssExtractPlugin=require('mini-css-extract-plugin');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin')
module.exports={
    entry:{
        main:["./src/main.js"],
        main1:["./src/main1.js"]
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,'../built'),
    },
    // 扩容
    // performance:{
    //   hints:'warning',
    //   maxEntrypointSize:5000000,
    //   maxAssetSize:3000000
    // },
    devServer:{
        // historyApiFallback: {
        //     rewrites: [
        //         { from: /.*/, to: '/built/index.html' },
        //     ],
        // },
        historyApiFallback:true,
        clientLogLevel:'info',
        host:'localhost',
        port:8086,
        open:true,
        contentBase:'./built',
        publicPath:'/',
    },
    resolve:{
      extensions:['.js','.json','.tsx','.ts','.vue'],
      alias:{
          'vue$':'vue/dist/vue.esm.js'
      }
    },
    module:{
      rules:[
          {
            test:/\.(ts|js)?$/,
            loader:'babel-loader',
            exclude:/(node_modules|bower_components)/
          },
          {
              test:/\.(ts|tsx)?$/,
              loader:'ts-loader',
              exclude:/node_modules/,
              options:{
                  appendTsSuffixTo:[/\.vue$/]
              }
          },
          {
              test:/\.(vue)?$/,
              loader:'vue-loader',
              exclude:/node_modules/
          },
          {
              test:/\.(css|scss)$/,
              use:[
                  MinCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader'
              ],
              exclude:/node_modules/
          }
      ]
    },
    devtool:'inline-source-map',

    optimization:{
        // 抽取共用代码
      splitChunks:{
          cacheGroups:{
              commons:{
                  chunks:'all',
                  name:'vendor',
                  test:/[\\/]node_modules[\\/]/
              }
          }
      },
        // 默认开启压缩代码
      minimizer:[
          // 优化合并压缩css
          new OptimizeCSSAssetsPlugin({}),
          // production模式下，webpack4会自动压缩js文件
          // js文件压缩插件
          new UglifyJsPlugin({
              cache:true,
              parallel:true,
              sourceMap:true
          })
      ]
    },
    plugins:[
        new CleanWebpackPlugin(['built'],{
            root:path.resolve(__dirname,'..'),
            dry:false
        }),
        new HtmlWebpackPlugin({
            title:'mypj6 management',
            template:'./template.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MinCssExtractPlugin({
            filename:'[name].[hash].css'
        })
    ]
}