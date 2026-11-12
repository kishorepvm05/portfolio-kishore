import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Modal } from './components/Modal';
import { CommandPalette } from './components/CommandPalette';
import { AIAssistant } from './components/AIAssistant';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModal, setActiveModal] = useState(null);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false; // Default to warm editorial beige
  });

  // Smooth Lenis Scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Keyboard shortcut Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll Progress Bar Spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleOpenModal = (project) => {
    setActiveModal(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="portfolio-app-root" style={{ position: 'relative' }}>
      {/* Cinematic Custom Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Experimental Luxury Custom Cursor (Desktop Pointer Devices) */}
      <CustomCursor />

      {/* Top Precision Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress-line" 
        style={{ 
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#F97316',
          transformOrigin: '0%',
          zIndex: 10001
        }} 
      />

      {/* Minimal Editorial Top Navigation */}
      <Navbar 
        isDark={isDark} 
        onToggleTheme={toggleTheme} 
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenModal={handleOpenModal} />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Interactive AI Assistant */}
      <AIAssistant />

      {/* Floating Return To Top */}
      <BackToTop />

      {/* Case Study Modal */}
      {activeModal && (
        <Modal project={activeModal} onClose={handleCloseModal} />
      )}

      {/* Ctrl + K Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </div>
  );
};

export default App;
