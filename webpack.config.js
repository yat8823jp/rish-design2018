const path = require('path');

module.exports = {
	entry: "./src/assets/scripts/main.js",
	output: {
		filename: 'bundle.js', //ビルドした後のファイル名
		path: path.resolve( __dirname, 'public' ) //ビルドしたファイルを吐き出す場所
 	},
	devServer: {
		contentBase: './public/',
		open: true,
		watchContentBase: true,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env'
							]
						}
					}
				],
				exclude: /node_modules/,
			},
			{
				test: /\.scss/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						}
					}
				],
			}
		]
	}
};
