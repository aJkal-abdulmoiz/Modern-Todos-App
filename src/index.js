import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import App from './App';
import './App.css'
import './index.css';  // or your specific CSS file


const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App className="main-component" />
  </React.StrictMode>
);
