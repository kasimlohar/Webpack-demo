const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Development mode for better debugging
  mode: 'development',
  // Include HMR client and our app entry point
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // Loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // Transform JSX and modern JavaScript
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  // Enable HMR plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
