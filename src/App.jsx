import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Modal } from './components/Modal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';

export const App = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Default to ultra-premium dark
  });

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
      {/* Scroll Progress Line */}
      <motion.div className="scroll-progress-line" style={{ scaleX }} />

      {/* Cyber-Futuristic Ambient Background Lighting Orbs & Grid */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Floating Glassmorphism Navbar with Theme Switch */}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onOpenModal={handleOpenModal} />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Floating Back to Top Control */}
      <BackToTop />

      {/* Project Case Study Deep-Dive Modal */}
      {activeModal && (
        <Modal project={activeModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
