
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <Hero />
        
        <section id="skills" className="py-24 bg-white">
          <Skills />
        </section>

        <section id="projects" className="py-24">
          <Projects />
        </section>

        <section id="experience" className="py-24 bg-slate-50">
          <Experience />
        </section>

        <section id="contact" className="py-24 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
