import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import About from "./components/About";
import Skills from "./components/Skills";

import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
