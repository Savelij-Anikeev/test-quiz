import React from 'react';
import ReactDOM from 'react-dom/client';

import './app/index.css';
import './app/normalize.css';

import App from './app/App';
import reportWebVitals from './app/reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
