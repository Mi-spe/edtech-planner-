import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Mounts the React application layout engine onto the root index HTML target
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
