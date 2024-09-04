import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://wallpapercave.com/wp/QS2nQSZ.jpg')" }}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
