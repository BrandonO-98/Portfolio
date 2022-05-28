/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import About from 'components/sections/about/About';
import Timeline from 'components/sections/timeline/Timeline';
import Projects from 'components/sections/projects/Projects';
import Navbar from 'components/sections/navbar/Navbar';
import Hero from 'components/sections/hero/Hero';
import Contact from 'components/sections/contact/Contact';
import Footer from 'components/sections/footer/Footer';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (e) => {
    window.scrollTo({
      top: (e.current.offsetTop - 110),
      behavior: 'smooth',
    });
  };
  return (
    <div className="grid">
      <Navbar
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        resume={resume}
        projects={projects}
        contact={contact}
      />
      <Hero
        scrollToSection={scrollToSection}
        home={home}
        resume={resume}
        projects={projects}
      />
      <About about={about} />
      <Timeline resume={resume} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
