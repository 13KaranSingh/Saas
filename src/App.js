// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Home page
import Dashboard from './pages/Dashboard';  // Dashboard page
import ClientsAndCases from './pages/ClientsAndCases';  // Clients & Cases page
import Documents from './pages/Documents';  // Documents page
import Billing from './pages/Billing';  // Billing & Payments page
import Login from './pages/Login';  // Login page (formerly Admin)
import Navbar from './components/Navbar';
import CaseProgress from './pages/CaseProgress';  // Case Progress page (updated file name)
import ClientOverview from './pages/ClientOverview';  // Client Overview page
import CaseManagement from './pages/CaseProgress';  // Updated to the correct file (CaseProgress.js)
import TaskTracking from './pages/TaskTracking';  // New Task and Appointment Tracking page
import FinancialTracking from './pages/FinancialTracking';  // New Financial Tracking page
import DocumentManagement from './pages/DocumentManagement';  // New Document Management page
import Communication from './pages/Communication';  // New Communication page
import LeadManagement from './pages/LeadManagement';  // New Lead Management page
import TeamCollaboration from './pages/TeamCollaboration';  // New Team Collaboration page
import Reports from './pages/Reports';  // Updated to the correct file (Reports.js)
import SecurityCompliance from './pages/SecurityCompliance';  // New Security and Compliance page
import WidgetsIntegrations from './pages/WidgetsIntegrations';  // Updated to the correct file (WidgetsIntegrations.js)

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

        {/* New routes for all the different sections */}
        <Route path="/dashboard/case-progress" element={<CaseProgress />} />
        <Route path="/dashboard/client-overview" element={<ClientOverview />} />
        <Route path="/dashboard/case-management" element={<CaseManagement />} />
        <Route path="/dashboard/task-tracking" element={<TaskTracking />} />
        <Route path="/dashboard/financial-tracking" element={<FinancialTracking />} />
        <Route path="/dashboard/document-management" element={<DocumentManagement />} />
        <Route path="/dashboard/communication" element={<Communication />} />
        <Route path="/dashboard/lead-management" element={<LeadManagement />} />
        <Route path="/dashboard/team-collaboration" element={<TeamCollaboration />} />
        <Route path="/dashboard/reports" element={<Reports />} />
        <Route path="/dashboard/security-compliance" element={<SecurityCompliance />} />
        <Route path="/dashboard/widgets-integrations" element={<WidgetsIntegrations />} />
      </Routes>
    </Router>
  );
};

export default App;
