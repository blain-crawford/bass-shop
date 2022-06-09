import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ThemeContextProvider from './contexts/themeContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode style={{margin: '0', padding: '0'}}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
