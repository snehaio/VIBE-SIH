import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardHolder from './components/CardHolder'; 
import './App.css'; 
import loco from './hooks/locoscroll.js';
import cursorEffect from './hooks/cursorEffect.js';
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    loco();
    cursorEffect();
  }, []);

  return (
    <div>
    <div id="cursor"></div>
    <div id="main" data-scroll-container>
      <div id="page1" data-scroll data-scroll-speed="-5" className="bg-cover bg-center" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/0030d0169252255.64495c063cd40.png')" }}>
        <Navbar />
        <HeroSection />
      </div>

      <CardHolder /> {/* Use the CardHolder component */}
    </div>
  </div>
  );
}

export default App;
