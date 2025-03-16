import React from 'react';
import ReactDOM from 'react-dom/client';

// Simple React component
const App = () => {
  return (
    <div>
      <h1>Express + Webpack Hot Middleware</h1>
      <p>Edit this text to test HMR</p>
    </div>
  );
};

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Enable Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
