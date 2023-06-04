import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { XssProvider } from './hooks/xssContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <XssProvider>
      <Router>
        <App />
      </Router>
    </XssProvider>
  </React.StrictMode>
);