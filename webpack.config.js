// // 一个简单的 webpack.config.js 文件
// var path = require('path');
// var webpack = require('webpack');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成build文件夹及文件：
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const ROOT_PATH = path.resolve(__dirname);
// const SRC_PATH = path.resolve(ROOT_PATH, 'src');
// const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

// module.exports = {
//   // webpack 进行打包的入口文件，这里 webpack 从根目录下的 index.js 开始进行打包
//   entry: [
//     './index'
//   ],
//   // webpack 打包后的输出文件的路径
// //   output: {
// //     path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
// //     filename: 'bundle.js',  // 将打包后的输出文件命名为 bundle.js
// //   }
//     output: {
//         path: BUILD_PATH,
//         filename: 'js/[name].[hash:5].js',
//         publicPath: '/'
//     },
//     resolve: {
//         extensions: [".js", ".json", ".jsx", ".css", ".less"],
// },
// }

var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  devtool: "source-map",//使打包后的代码的报错信息精确到行
  output: {
    // path: path.join(__dirname, 'dist'), // 文件放至当前路径下的 dist 文件夹
    path: path.resolve(__dirname, "./build/js"),//绝对路径,打包发布时才用到 path.resolve将两个相对路径生成了一个绝对路径
    publicPath: '/js/',//index.html与打包后的js的相对路径
    filename: "bundle.js"
  },
  devServer: {   //webpack端口设置,默认8080
    historyApiFallback: true,  //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用
    inline: true, //推荐使用模块热替换的内联模式，因为它包含来自 websocket 的 HMR 触发器。轮询模式可以作为替代方案，但需要一个额外的入口点：'webpack/hot/poll?1000'。
    port: 1010
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".less"],
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'react', 'stage-2']
      }
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
    //  {
    //   test: /\.less$/,
    //   use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ // css-hot-loader结局热替换CSS不自动刷新
    //     fallback: 'style-loader',
    //     use: ['css-loader', 'less-loader']
    //   }))
    // },
    {
      test: /\.less$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'less-loader'
      ]
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }
};
