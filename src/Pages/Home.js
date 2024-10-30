import React from 'react';
import Header from '../Components/Header/Header';
import HeroSection from '../Components/HeroSection/HeroSection';
import IssuedReport from '../Components/Reports/issuedReport';
import Footer from '../Components/Footer/Footer';
import ChatBot from '../Components/ChatBot/ChatBot'; 

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="mt-8"> 
        <IssuedReport />
      </div>
      <Footer />
      <ChatBot /> 
    </div>
  );
};

export default HomePage;
