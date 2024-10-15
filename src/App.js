import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ReportIssue from './Pages/Report';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportIssue />} />
        {/* You can add more routes here */}

      </Routes>
    </div>
  );
}

export default App;
