const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module.eval-source-map',
	resolve: {
		extensions: ['.js', '.jsx'], // extensiones q leerá webpack
		modules: [ // donde estan los modulos cerfados por el desarrollado y los node modules
			path.join(__dirname, 'src'),
			'node_modules'
		]
	},

	// ficheros de entrada, hot reloading
	entry: [
		'webpack-dev-server/client',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index.jsx')

	],

	output: { // fichero final de la app (el q será subido a prod)
		path: path.join(__dirname, 'build'), // nombre de carpeta build
		filename: 'bundle.js', // nombre de archivo bundle.js
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}, {
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2)$/,
				use: 'url-loader?prefix=font/&limit?5000'
			},
			{
				test: /ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=application/octet-stream'
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=image/svg+xml'
			}
		]
	}

	plugins: [
		new webpack.HotModuleReplacementPlugin(), // sirve para los plugons se puedan intercalar cuando se usa hot reloading
		new webpack.NoEmitOnErrorPlugin(),
		new HtmlWebpackPlugin({
			title: 'Redux Ecommerce',
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html'
		})
	],

	devServer: {
		host: '0.0.0.0',
		hot: true,
		port: 8080,
		inline: true, // toda la transpilacion se incruste de modo inline en la version minificada
		contentBase: path.join(__dirname, 'src'),
		historyApiFallback: true // permite tener un sever de dev q soporte las url que crea un single page app
	}
	
}