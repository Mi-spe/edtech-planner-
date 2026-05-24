import { StrictMode } from 'react'; // Cleaner import (destructured)
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // CRITICAL FIX: Imports the Tailwind CSS directives

const rootElement = document.getElementById('root');

// SAFETY CHECK: Ensure the DOM target exists before mounting React
if (!rootElement) {
  throw new Error(
    "Failed to find the root element. Ensure your index.html has a <div id='root'></div>"
  );
}

// Mounts the React application layout engine onto the root HTML target safely
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
