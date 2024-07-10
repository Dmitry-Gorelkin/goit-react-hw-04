import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App.jsx';
import { theme } from './style/theme.jsx';
import { GlobalStyle } from './style/GlobalStyle.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
