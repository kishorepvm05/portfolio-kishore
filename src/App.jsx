import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Toast } from './components/Toast';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { JourneySection } from './sections/JourneySection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';

export const App = () => {
  const [toast, setToast] = useState(null);

  const handleTriggerToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  return (
    <div className="portfolio-app" style={{ position: 'relative', overflowX: 'hidden' }}>
      
      {/* Dynamic ambient background glow circles */}
      <div className="bg-ambient-orb-1" aria-hidden="true" />
      <div className="bg-ambient-orb-2" aria-hidden="true" />

      {/* Main Navigation Bar with Active Highlighting & Progress Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Technical Skills Explorer */}
        <SkillsSection onTriggerToast={handleTriggerToast} />

        {/* 4. Projects Showcase */}
        <ProjectsSection onTriggerToast={handleTriggerToast} />

        {/* 5. Education Timeline */}
        <EducationSection />

        {/* 6. Learning Journey Roadmap */}
        <JourneySection />

        {/* 7. Resume & Qualifications */}
        <ResumeSection onTriggerToast={handleTriggerToast} />

        {/* 8. Contact Section */}
        <ContactSection onTriggerToast={handleTriggerToast} />
      </main>

      {/* Page Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Global Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

    </div>
  );
};

export default App;
