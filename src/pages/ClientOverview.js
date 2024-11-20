// src/pages/ClientOverview.js
import React, { useEffect, useState } from 'react';

function ClientOverview() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Example of fetching client data (this will later be replaced with real API calls)
    setClients([
      { id: 1, name: 'Client 1', nextMeeting: '12/10/2024' },
      { id: 2, name: 'Client 2', nextMeeting: '12/15/2024' },
    ]);
  }, []);

  return (
    <div className="client-overview-container">
      <h2>Client Overview</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <h3>{client.name}</h3>
            <p>Next Meeting: {client.nextMeeting}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientOverview;
