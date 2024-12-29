import { I18nextProvider } from 'react-i18next';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import global_es from "./translation/es/global.json"
import global_en from "./translation/en/global.json"
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources:{
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);


reportWebVitals();