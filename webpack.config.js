const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 

module.exports = {
  entry: './client/index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'build'),
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/build'
    }, 
    proxy: {
      '/':'http://localhost:3000'
    }, 
    plugins: [new HtmlWebpackPlugin({template: 'index.html'})]
  }
};