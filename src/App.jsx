/* eslint-disable no-unused-vars */
import React from 'react';
import About from 'components/sections/about/About';
import Timeline from 'components/sections/timeline/Timeline';
import Projects from 'components/sections/projects/Projects';
import Navbar from 'components/sections/navbar/Navbar';
import Hero from 'components/sections/hero/Hero';
import Contact from 'components/sections/contact/Contact';
import Footer from 'components/sections/footer/Footer';

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Hero />
      <About />
      {/* <Timeline /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
