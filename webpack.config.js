var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['./src/js/app.js'],

	output: {
			filename: 'dest/bundel.js'
		},

	module: {
		loaders: [
		  {
		    test: /\.(js|jsx)$/,
		    includ: path.resolve(__dirname, 'src/js'),
		    exclude: /(node_modules|bower_components)/,
		    loader: 'babel',
		    query: {
		      presets: ['react', 'es2015']
		    }
		  }
		]
	},

	watch: true

};