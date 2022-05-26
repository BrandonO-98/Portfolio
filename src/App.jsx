import React from 'react';
import About from 'components/sections/about/About';
import Timeline from 'components/sections/timeline/Timeline';
import Projects from 'components/sections/projects/Projects';
import Navbar from './components/sections/navbar/Navbar';
import Hero from './components/sections/hero/Hero';

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
