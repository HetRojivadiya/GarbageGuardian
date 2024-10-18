import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ReportIssue from './Pages/Report';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignUp';
import AboutPage from './Pages/About';
import ContactUsPage from './Pages/ContactUs';


function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        {/* You can add more routes here */}

      </Routes>
    </div>
  );
}

export default App;
