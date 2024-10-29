import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import ReportIssue from './Pages/Report';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/SignUp';
import AboutPage from './Pages/About';
import ContactUsPage from './Pages/ContactUs';
import AuthProvider from './Contexts/Contexts';
import MyReports from './Pages/MyReports/ReportsPage';
import OrganizationsPage from './Pages/Organization';
import ProductDisplay from './Pages/Product';
import PrivacyPolicy from './Pages/PrivacyAndPolicy';

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportIssue />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/myreports" element={<MyReports />} />
            <Route path="/products" element={<ProductDisplay/>} />
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
