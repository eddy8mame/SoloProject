const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); 

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
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
    historyApiFallback: true,
     port: 8080
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  devtool: 'source-map',
  
  
};