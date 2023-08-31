const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

  entry: {
  	index: './src/scripts/index.js',
    homePage: './src/scripts/home.js',
    menuPage: './src/scripts/menu.js',
    contactPage: './src/scripts/contact.js',
    utilities: './src/scripts/utilities.js'
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
    	template: './src/index.html',
    })
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, '/src'),
    },
    compress: true,
    port: 9000,
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  optimization: {
  	runtimeChunk: 'single',
  },
};