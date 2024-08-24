import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'swiper/css';
import 'swiper/css/scrollbar';
import './index.css';

import { LanguageProvider } from './context/LanguageProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
