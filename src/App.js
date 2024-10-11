import React from 'react';

import IssueReport from './Components/Reports/issueReport';
import IssuedReport from './Components/Reports/issuedReport'; // Assuming you place the component in 'components' folder

function App() {
  return (
    <div className="App">
      <IssueReport/>
      <IssuedReport />
    </div>
  );
}

export default App;
