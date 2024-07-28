import React from 'react';
import Navbar from './components/Navbar';

import HeroSection from './components/Herosection';
import About from './components/About';
import Services from './components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About/>
      <Services/>
    </div>
  );
}

export default App;
