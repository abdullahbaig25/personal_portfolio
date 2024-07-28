import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactSection from "./components/Contact";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <ContactSection/>
      </div>
    </div>
  );
}

export default App;
