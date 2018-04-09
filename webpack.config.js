const path = require('path');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        	loader: 'babel-loader',
        	options: {
        		presets: [
        			'env', 
        			'react'
        		]
        	}
        }          
      }
    ]
  },
	output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
