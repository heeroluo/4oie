const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config.js');

module.exports = Object.assign({
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.ejs',
			inject: true,
			minify: {
				collapseWhitespace: true,
				minifyCSS: true
			}
		})
	],
	devServer: {
		compress: true,
		overlay: true,
		port: 4560
	}
}, config);