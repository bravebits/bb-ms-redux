const path = require('path')
const webpack = require('webpack')


const isProd = process.env.BABEL_ENV === 'production'
module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: isProd ? './index.prod.js' : './index.dev.js'
	},
	output: {
		path: path.join(__dirname, '/lib/'),
		filename: isProd ? 'bb-media-selector.js' : 'bb-media-selector-dev.js',
		library: 'BBMediaSelector',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	externals: {
		'react': 'react',
		'react-dom': 'react-dom',
		'jquery': 'jquery',
		'underscore': 'underscore'
	},

	devServer: {
		contentBase: path.resolve(__dirname, './src') // New
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				loaders: ['babel-loader']
			},
			{
				test: /\.js$/,
				exclude: [/node_modules/, /modules/],
				loaders: ['babel-loader']
			},
			{
				test: /\.jsx$/,
				exclude: [/node_modules/, /modules/],
				loaders: ['jsx-loader', 'babel-loader']
			},
			{
				test: /\.(ttf|eot|woff|woff2|svg|gif|jpg|png)$/,
				use: 'url-loader?limit=10000'
			},
			{
				test: /\.css/,
				include: /styles\/vendor|node_modules/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules|vendor|elements/,
				use: [
					'style-loader',
					!isProd
						? 'css-loader?modules&localIdentName=[local]_[hash:base64:3]'
						: 'css-loader?modules&minimize&localIdentName=_[hash:base64:10]',
					'postcss-loader'
				]
			},
			{
				test: /\.scss$/,
				exclude: /node_modules|vendor|elements/,
				use: [
					'style-loader',
					!isProd
						? 'css-loader?modules&localIdentName=[local]_[hash:base64:3]'
						: 'css-loader?modules&minimize&localIdentName=_[hash:base64:10]',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
		// new webpack.optimize.UglifyJsPlugin({
		// 	minimize: true,
		// 	compress: {
		// 		warnings: false
		// 	}
		// })
	]
}
