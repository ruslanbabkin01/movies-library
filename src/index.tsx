import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/movies-library">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
