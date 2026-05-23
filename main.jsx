import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafb;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

// Mounts the React application layout engine onto the root index HTML target
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
