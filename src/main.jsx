import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateAccount from './CreateAccount';
import CreateAccountOTP from './CreateAccountOTP';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account-otp" element={<CreateAccountOTP />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
