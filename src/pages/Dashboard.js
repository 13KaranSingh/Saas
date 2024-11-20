// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';  // Redirect to login if not authenticated
    } else {
      // Fetch data from the API or backend if authenticated
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api/dashboard', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    });
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl">Dashboard</h1>
      {data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
