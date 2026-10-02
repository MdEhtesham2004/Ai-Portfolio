import React, { useEffect } from 'react';
import { initSmoothScroll, initMagnetic } from './lib/motion';
import Loader from './sections/Loader';
import Hero from './sections/Hero';
import Trainings from './sections/Trainings';
import Expertise from './sections/Expertise';
import Products from './sections/Products';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import NavPill from './sections/NavPill';

function App() {
  useEffect(() => initSmoothScroll(), []);
  useEffect(() => initMagnetic(), []);

  return (
    <>
      <Loader />
      <Hero />
      <main>
        <Trainings />
        <Expertise />
        <Products />
        <Projects />
        <About />
      </main>
      <Contact />
      <NavPill />
    </>
  );
}

export default App;
