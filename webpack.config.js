const path = require('path');

module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
		path: path.resolve(__dirname, './docs')
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}]
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'imgs/[name].[hash:8].[ext]'
					}
				}
			}
		]
	}
};