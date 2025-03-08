const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    // Entry point for the application
    entry: './src/index.js',
    
    // Output configuration
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js'
    },

    // Development server configuration
    devServer: {
      static: './dist',
      hot: true,
      port: 3000
    },

    // Module rules for different file types
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },

    // Plugins configuration
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })] : [])
    ],

    // Optimization and performance settings
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },

    // Source maps for development
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};
