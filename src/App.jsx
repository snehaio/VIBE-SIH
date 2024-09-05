import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import loco from './hooks/locoscroll.js'
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {  // Use `useEffect` with an arrow function
    loco();
  }, []);
  return (
    <div id="main">
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/0030d0169252255.64495c063cd40.png')" }}>
      <Navbar />
      <HeroSection />
    </div>
    </div>
  );
}

export default App;
