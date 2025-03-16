// Import required dependencies
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

// Setup webpack-dev-middleware to serve bundled files
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Setup webpack-hot-middleware for HMR functionality
app.use(webpackHotMiddleware(compiler));

// Serve the static HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
