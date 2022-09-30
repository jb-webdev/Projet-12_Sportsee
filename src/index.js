import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './utils/Context/globalContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);