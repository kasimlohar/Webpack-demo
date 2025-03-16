import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple React component for testing HMR
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Edit this text to test HMR</p>
    </div>
  );
};

// Create a root instance using React 18's createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Enable Hot Module Replacement
// This allows the app to update without full page refresh
if (module.hot) {
  module.hot.accept();
}
