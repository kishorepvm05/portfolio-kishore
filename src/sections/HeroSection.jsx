import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  FileText, 
  Layers, 
  TrendingUp,
  Download
} from 'lucide-react';
import { personalData } from '../data/personal';
import { HeroDashboard } from '../components/HeroDashboard';
import { Hero3DScene } from '../components/Hero3DScene';
import { TechIcon } from '../components/TechIcon';

export const HeroSection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      {/* Interactive 3D Three.js Particle Universe & Objects */}
      <Hero3DScene />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="hero-grid">
          
          {/* Left Column: Editorial Futuristic Hero Messaging */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Status Badge */}
            <div className="hero-eyebrow">
              <span className="badge-tag-dot" />
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--cyan)' }}>
                {personalData.availability.status}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">{personalData.name}</span>.
            </h1>

            {/* Professional Role Title */}
            <div className="hero-subtitle">
              <span>Data Analyst</span>
              <span style={{ color: 'var(--cyan)' }}>&bull;</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                Business Intelligence Enthusiast
              </span>
            </div>

            {/* Tagline & Personal Introduction */}
            <p className="hero-tagline">
              <strong>{personalData.tagline}</strong> BBA graduate (2026, 66.67%) currently pursuing MBA. 
              Transforming complex raw databases into clean executive dashboards and high-impact decision models 
              using Excel, Power&nbsp;BI, MySQL, and Python.
            </p>

            {/* 3 Call-To-Action Buttons */}
            <div className="hero-cta-group">
              <button
                className="btn-futuristic-primary"
                onClick={() => scrollTo('#projects')}
                aria-label="Explore My Work"
              >
                <span>Explore My Work</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={personalData.resume.downloadUrl}
                download={personalData.resume.fileName}
                className="btn-futuristic-secondary"
                aria-label="Download Resume"
                style={{ textDecoration: 'none' }}
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <button
                className="btn-futuristic-ghost"
                onClick={() => scrollTo('#contact')}
                aria-label="Let's Connect"
              >
                <span>Let&apos;s Connect</span>
                <Sparkles size={15} />
              </button>
            </div>

            {/* Interactive Technology Strip */}
            <div className="hero-tech-strip">
              <span className="hero-tech-label">Core Stack:</span>
              <div className="hero-tech-pills">
                <div className="hero-tech-item" title="Microsoft Excel: Advanced Lookups & Pivot Models">
                  <TechIcon name="Microsoft Excel" size={18} />
                  <span>Excel</span>
                </div>
                <div className="hero-tech-item" title="Power BI: DAX & Interactive Dashboards">
                  <TechIcon name="Power BI" size={18} />
                  <span>Power BI</span>
                </div>
                <div className="hero-tech-item" title="MySQL: Complex Joins & Business Metrics">
                  <TechIcon name="MySQL" size={18} />
                  <span>MySQL</span>
                </div>
                <div className="hero-tech-item" title="Python: Data Cleaning & Exploratory Analysis">
                  <TechIcon name="Python" size={18} />
                  <span>Python</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Floating Interactive Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <HeroDashboard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
