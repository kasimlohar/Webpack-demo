# Stone Paper Scissors Game

A simple Stone Paper Scissors game built with JavaScript and Webpack. This project demonstrates modern frontend development practices including module bundling, asset management, and development workflow optimization.

## Features

- Player vs Computer gameplay
- Real-time score tracking
- Responsive design
- Hot Module Replacement during development
- Production-ready build configuration
- Asset optimization and management

## Tech Stack

- JavaScript (ES6+)
- Webpack 5
- CSS3
- HTML5

## Prerequisites

- Node.js (>= 12.0.0)
- npm (>= 6.0.0)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Demo
```

2. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm start
```
This will start the development server at `http://localhost:3000` with hot reload enabled.

## Production Build

Create a production build:
```bash
npm run build
```
The built files will be in the `dist` directory.

## Project Structure

```
Demo/
├── src/
│   ├── index.js        # Application entry point
│   ├── game.js         # Game logic
│   ├── index.html      # HTML template
│   └── styles.css      # Styles
├── webpack.config.js   # Webpack configuration
├── package.json        # Project dependencies and scripts
└── README.md          # Project documentation
```

## Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development build

## License

MIT

## Author

Kasim Lohar
