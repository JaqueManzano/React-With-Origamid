import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' para React 18
import App from './App'; // Certifique-se de que o caminho está correto para o componente App

// Pegue o elemento root no DOM
const rootElement = document.getElementById('root');

// Crie o root usando a nova API
const root = ReactDOM.createRoot(rootElement);

// Renderize o componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
