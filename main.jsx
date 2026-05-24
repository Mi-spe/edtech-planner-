import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This imports the Tailwind CSS styles

const rootElement = document.getElementById('root');

// Safety check to prevent the app from crashing silently if the HTML changes
if (!rootElement) {
  throw new Error(
    "Failed to find the root element. Ensure your index.html has a <div id='root'></div>"
  );
}

// Mounts the React application
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);