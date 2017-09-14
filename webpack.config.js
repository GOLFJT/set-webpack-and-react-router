const webpack = require('webpack');
const path = require('path');
// const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry:[
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
   './index.js',
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local][hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
        //   'postcss-loader'
        ]
      }
    ],
  },
//   postcss: function () {
//     return [autoprefixer];
//   }
plugins: [
  new webpack.HotModuleReplacementPlugin()
],
devServer: {
    hot:true,
    inline:false,
    historyApiFallback: true
}
};