import React from 'react';
import Navbar from './components/navbar'; 
import MainContent from './components/main';
import AboutServices from './components/aboutservices';
import './App.css';

const App = () => {
  return (  
    <div>
      <Navbar />
      <MainContent />
      <AboutServices />
      </div>
  )
}

export default App
