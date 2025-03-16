# Webpack Dev Server HMR Test

This project demonstrates Hot Module Replacement (HMR) using webpack-dev-server with React.

## Features

- webpack-dev-server configuration
- Hot Module Replacement (HMR)
- React 18
- Babel for JSX transformation

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src` - Source files
  - `index.js` - Main React application
- `/public` - Static files
  - `index.html` - HTML template
- `webpack.config.js` - Webpack and dev server configuration

## Development

1. Make changes to React components in `/src`
2. Changes will be reflected immediately in browser
3. HMR preserves component state during updates

## How It Works

- webpack-dev-server provides development server
- HMR is enabled through `hot: true` in webpack config
- React components automatically update through module.hot.accept()
- State is preserved during hot updates
