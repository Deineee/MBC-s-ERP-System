import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Login.css';
import './css/Signup.css';
import './css/Sidebar.css';
import './css/Dashboard.css';
import './css/Navbar.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
