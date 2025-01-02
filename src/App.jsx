import React from 'react';
import Navbar from './components/navbar'; 
import MainContent from './components/main';
import AboutServices from './components/aboutservices';
import PortfolioSection from './components/Portfolio';
import ContactFormSection from './components/contactform';
import ContactDetails from './components/contactdetails';
import './App.css';

const App = () => {
  return (  
    <div>
      <Navbar />
      <MainContent />
      <AboutServices />
      <PortfolioSection />
      <ContactFormSection />
      <ContactDetails />
      </div>
  )
}

export default App
