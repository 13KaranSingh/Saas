// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Assuming you have a Home page
import Dashboard from './pages/Dashboard';  // Dashboard page
import ClientsAndCases from './pages/ClientsAndCases';  // Clients & Cases page
import Documents from './pages/Documents';  // Documents page
import Billing from './pages/Billing';  // Billing & Payments page
import Login from './pages/Login';  // Login page (formerly Admin)
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Add the Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients-cases" element={<ClientsAndCases />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/login" element={<Login />} />  {/* Update this route */}
      </Routes>
    </Router>
  );
};

export default App;
