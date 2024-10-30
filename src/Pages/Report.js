import React from 'react';
import Header from '../Components/Header/Header';

import Footer from '../Components/Footer/Footer';
import ReportIssue from '../Components/Reports/issueReport';


const HomePage = () => {
  return (
    <div>
      <Header />
      <ReportIssue/>
      <Footer />
      
    </div>
  );
};

export default HomePage;
