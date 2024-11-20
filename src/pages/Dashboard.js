// // src/pages/Dashboard.js
//this is the auth check, makes user log in if they arent 
// import React, { useEffect, useState } from 'react';

// function Dashboard() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       window.location.href = '/login';  // Redirect to login if not authenticated
//     } else {
//       // Fetch data from the API or backend if authenticated
//       fetchData();
//     }
//   }, []);

//   const fetchData = async () => {
//     const response = await fetch('http://localhost:5000/api/dashboard', {
//       headers: {
//         'Authorization': `Bearer ${localStorage.getItem('token')}`,
//       }
//     });
//     const result = await response.json();
//     setData(result);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl">Dashboard</h1>
//       {data ? (
//         <div>{JSON.stringify(data)}</div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


// src/pages/Dashboard.js
// src/pages/Dashboard.js

//this is the ui of the dashboard with some dummy data
// src/pages/Dashboard.js
// src/pages/Dashboard.js
// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Law Firm Dashboard</h1>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-cards">
        {/* Client Overview */}
        <Link to="/dashboard/client-overview" className="dashboard-card">
          <h2>Client Overview</h2>
          <p>Active Clients, Contact Info, and Recent Activities.</p>
        </Link>

        {/* Case Management */}
        <Link to="/dashboard/case-progress" className="dashboard-card">
          <h2>Case Management</h2>
          <p>Case Status, Deadlines, and Assignments.</p>
        </Link>

        {/* Task and Appointment Tracking */}
        <Link to="/dashboard/task-tracking" className="dashboard-card">
          <h2>Task and Appointment Tracking</h2>
          <p>Manage Tasks, To-Dos, and Upcoming Appointments.</p>
        </Link>

        {/* Financial Tracking */}
        <Link to="/dashboard/financial-tracking" className="dashboard-card">
          <h2>Financial Tracking</h2>
          <p>Invoices, Payments, and Billing Status.</p>
        </Link>

        {/* Document Management */}
        <Link to="/dashboard/document-management" className="dashboard-card">
          <h2>Document Management</h2>
          <p>Access Recent Documents, Templates, and Storage.</p>
        </Link>

        {/* Communication */}
        <Link to="/dashboard/communication" className="dashboard-card">
          <h2>Communication</h2>
          <p>Email, Notes, and Alerts.</p>
        </Link>

        {/* Lead Management */}
        <Link to="/dashboard/lead-management" className="dashboard-card">
          <h2>Lead Management</h2>
          <p>Track Leads, Source, and Conversion.</p>
        </Link>

        {/* Team Collaboration */}
        <Link to="/dashboard/team-collaboration" className="dashboard-card">
          <h2>Team Collaboration</h2>
          <p>Team Overview and Internal Communication.</p>
        </Link>

        {/* Reports and Analytics */}
        <Link to="/dashboard/reports" className="dashboard-card">
          <h2>Reports and Analytics</h2>
          <p>Client Retention, Revenue Tracking, and Case Outcomes.</p>
        </Link>

        {/* Security and Compliance */}
        <Link to="/dashboard/security-compliance" className="dashboard-card">
          <h2>Security and Compliance</h2>
          <p>Audit Logs and Data Encryption.</p>
        </Link>

        {/* Custom Widgets and Integrations */}
        <Link to="/dashboard/widgets-integrations" className="dashboard-card">
          <h2>Custom Widgets and Integrations</h2>
          <p>Useful widgets and third-party integrations.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
