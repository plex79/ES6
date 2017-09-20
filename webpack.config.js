const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
    
      // Loaders for other file types can go here
    ],
  },

devServer: {
	contentBase: path.join(__dirname, "build"),
	inline: true,
	port: 3000
}

};



