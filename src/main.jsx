import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppRouter />
  </Router>,
);