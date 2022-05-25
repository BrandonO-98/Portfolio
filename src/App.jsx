import React from 'react';
import About from 'components/sections/about/About';
import Navbar from './components/sections/navbar/Navbar';
import Hero from './components/sections/hero/Hero';

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
