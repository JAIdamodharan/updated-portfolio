import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="blob" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
