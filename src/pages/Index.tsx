
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import ScrollProgress from '../components/ScrollProgress';
import ThemeToggle from '../components/ThemeToggle';
import CursorEffect from '../components/CursorEffect';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`relative min-h-screen transition-all duration-500 ${
      darkMode ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      <CursorEffect />
      <ScrollProgress />
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
