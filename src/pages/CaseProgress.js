// src/pages/CaseProgress.js
import React, { useEffect, useState } from 'react';

function CaseProgress() {
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    // This would be where you fetch case data, for now using static data
    setCaseData([
      { id: 1, name: 'Ongoing Case 1', nextCourtDate: '12/12/2024' },
      { id: 2, name: 'Ongoing Case 2', nextCourtDate: '12/20/2024' },
    ]);
  }, []);

  return (
    <div className="case-progress-container">
      <h2>Case Progress</h2>
      <ul>
        {caseData.map((caseItem) => (
          <li key={caseItem.id}>
            <h3>{caseItem.name}</h3>
            <p>Next Court Date: {caseItem.nextCourtDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaseProgress;
