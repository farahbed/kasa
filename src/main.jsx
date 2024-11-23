import React from 'react';
import ReactDOM from 'react-dom/client'; {/* permet de rendre l'application React dans le DOM */}
import './styles/App.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* permet de naviguer entre les pages sans recharger la page*/} 
    <App />  {/* App est le composant principal de l'application */}
  </BrowserRouter>
);
