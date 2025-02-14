import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary router components
import Navbar from './components/navbar';
import MainContent from './components/main';
import AboutServices from './components/aboutservices';
import PortfolioSection from './components/Portfolio';
import ContactFormSection from './components/contactform';
import ContactDetails from './components/contactdetails';
import NavbarExperience from './components/navbarexperience';
import MyExperience from './components/myexperience';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainContent />
              <AboutServices />
              <PortfolioSection />
              <ContactFormSection />
              <ContactDetails />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <NavbarExperience />
              <MyExperience />
              <PortfolioSection />
              <ContactFormSection />
              <ContactDetails />  
              
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App
