# Express HMR Example

This project demonstrates Hot Module Replacement (HMR) using Express.js, webpack-dev-middleware, and webpack-hot-middleware with React.

## Features

- Express.js server
- Webpack 5 configuration
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
- `server.js` - Express server configuration
- `webpack.config.js` - Webpack configuration

## How It Works

- webpack-dev-middleware serves the bundled files
- webpack-hot-middleware enables HMR functionality
- Changes to React components trigger HMR updates
- The server automatically rebuilds when files change

## Development

Make changes to files in the `/src` directory and see them reflected immediately in the browser without full page reloads.
