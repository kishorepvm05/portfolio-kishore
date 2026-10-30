import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Modal } from './components/Modal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { JourneySection } from './sections/JourneySection';
import { ContactSection } from './sections/ContactSection';

export const App = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenModal = (project) => {
    setActiveModal(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="portfolio-app">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection onOpenModal={handleOpenModal} />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <BackToTop />

      {activeModal && (
        <Modal project={activeModal} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
