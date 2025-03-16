const path = require('path');

module.exports = {
  // Development mode for better debugging and HMR
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Transform JSX and modern JavaScript using babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  // Development server configuration with HMR enabled
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true, // Enable Hot Module Replacement
    port: 3000,
  }
};
