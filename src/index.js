import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Dashboard from './dashboard';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
