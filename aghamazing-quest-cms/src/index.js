import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // 🔑 Make sure your CSS is imported here or in App.jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);