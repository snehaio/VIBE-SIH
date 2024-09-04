import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/0030d0169252255.64495c063cd40.png')" }}>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
