import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';

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
    <section id="hero" className="hero-editorial-section" aria-label="Hero — Introduction">
      <div className="container">
        <div className="hero-editorial-grid">
          
          {/* 1. LEFT CONTENT: Identity & Introduction */}
          <motion.div 
            className="hero-left-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Professional Role Badge */}
            <div className="hero-role-badge">
              <span className="editorial-tag-dot" />
              <span>{personalData.role}</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-editorial-title">
              I&apos;m Kishore, <br />
              an <em>Aspiring</em> Data Analyst.
            </h1>

            {/* Short Professional Narrative */}
            <p className="hero-editorial-bio">
              Bridging business administration fundamentals with data-driven decision models. 
              Specializing in Microsoft Excel, Power BI dashboards, SQL databases, and Python exploration.
            </p>

            {/* Call to Actions */}
            <div className="hero-editorial-actions">
              <button 
                onClick={() => scrollTo('#projects')}
                className="btn-editorial-pill"
                aria-label="View My Projects"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} />
              </button>

              <a 
                href={personalData.resume.downloadUrl}
                download={personalData.resume.fileName}
                className="btn-editorial-outline"
                aria-label="Download Resume"
              >
                <Download size={15} />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>

          {/* 2. CENTER CONTENT: Large Original Profile Photograph Centerpiece */}
          <motion.div 
            className="hero-center-portrait-col"
            initial={{ opacity: 0, y: 35, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="portrait-glow-halo" />

            <div className="portrait-frame-container">
              <img 
                src="/kishore-profile.png" 
                alt="Kishore T — Data Analyst Profile Portrait"
                className="portrait-image-element"
                loading="eager"
                onError={(e) => {
                  // Fallback to portrait jpg if needed
                  e.currentTarget.src = '/kishore-portrait.jpg';
                }}
              />
            </div>
          </motion.div>

          {/* 3. RIGHT CONTENT: Elegant Real Data Statistics */}
          <motion.div 
            className="hero-right-metrics"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            {/* Metric 1: Core Technologies */}
            <div className="editorial-metric-card">
              <div className="metric-number-large">04</div>
              <div className="metric-label-caps">Analytics Stack</div>
              <div className="metric-detail-text">
                Excel, Power BI, MySQL &amp; Python
              </div>
            </div>

            {/* Metric 2: Projects Completed */}
            <div className="editorial-metric-card">
              <div className="metric-number-large">
                0{projectsData.length}
              </div>
              <div className="metric-label-caps">Case Studies</div>
              <div className="metric-detail-text">
                Retail e-commerce, sales BI &amp; exploratory models
              </div>
            </div>

            {/* Metric 3: Academic Foundation & Year */}
            <div className="editorial-metric-card">
              <div className="metric-number-large">2026</div>
              <div className="metric-label-caps">Academic Year</div>
              <div className="metric-detail-text">
                BBA Graduate (66.67%) &bull; Pursuing MBA
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
