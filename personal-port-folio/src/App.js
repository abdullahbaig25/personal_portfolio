import React from 'react';
import Navbar from './components/Navbar';

import HeroSection from './components/Herosection';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About/>
    </div>
  );
}

export default App;
