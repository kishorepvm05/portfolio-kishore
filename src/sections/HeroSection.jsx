import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { GeometricSculpture } from '../components/GeometricSculpture';

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
      
      {/* Subtle Architectural Grid Lines & Background Accents */}
      <div className="hero-backdrop-lines" aria-hidden="true">
        <div className="backdrop-line-v backdrop-line-v-1" />
        <div className="backdrop-line-v backdrop-line-v-2" />
        <div className="backdrop-line-h" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Top Massive Oversized Editorial Headline: KISHORE */}
        <motion.div 
          className="hero-marquee-name-row"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-oversized-name">
            KISHORE<span className="orange-accent-dot">.</span>
          </div>
          <div className="hero-archive-badge">
            <span className="orange-status-dot" />
            <span>PORTFOLIO / 2026 ARCHIVE</span>
          </div>
        </motion.div>

        {/* 3-Column Balanced Creative Grid */}
        <div className="hero-editorial-grid">
          
          {/* 1. LEFT CONTENT: Narrative, Philosophy & Actions */}
          <motion.div 
            className="hero-left-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Professional Role Badge */}
            <div className="hero-role-badge">
              <span className="editorial-tag-dot" />
              <span>{personalData.role}</span>
            </div>

            {/* Editorial Title */}
            <h1 className="hero-editorial-title">
              Crafting clarity from <em>complex</em> datasets.
            </h1>

            {/* Narrative Description */}
            <p className="hero-editorial-bio">
              Bridging strategic business administration with quantitative analytics. 
              Transforming raw transactional records into interactive Power BI dashboards, 
              structured relational SQL queries, and predictive decision frameworks.
            </p>

            {/* Action Buttons */}
            <div className="hero-editorial-actions">
              <button 
                onClick={() => scrollTo('#projects')}
                className="btn-editorial-pill"
                aria-label="View My Projects"
              >
                <span>Explore Projects</span>
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

            {/* Subtle Tech Ticker Line */}
            <div className="hero-tech-ticker">
              <span className="ticker-label">STACK:</span>
              <span className="ticker-item">Microsoft Excel</span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">Power BI</span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">MySQL</span>
              <span className="ticker-sep">&bull;</span>
              <span className="ticker-item">Python</span>
            </div>
          </motion.div>

          {/* 2. CENTER CONTENT: Animated Abstract 3D Geometric Sculpture */}
          <motion.div 
            className="hero-center-sculpture-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="sculpture-stage-box">
              {/* Subtle Warm Halo Glow */}
              <div className="sculpture-warm-halo" />

              {/* Interactive Three.js Geometric Sculpture */}
              <GeometricSculpture />

              {/* Micro Tech Label at bottom of sculpture */}
              <div className="sculpture-caption">
                <span className="sculpture-axis">FIG 01 &bull; KINETIC SCULPTURE</span>
                <span className="sculpture-desc">ROTATIONAL GEOMETRY</span>
              </div>
            </div>
          </motion.div>

          {/* 3. RIGHT CONTENT: Real Portfolio Metrics & Statistics */}
          <motion.div 
            className="hero-right-metrics"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            {/* Metric 1: Core Technologies */}
            <div className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">04</div>
                <div className="metric-tag-pill">DOMAINS</div>
              </div>
              <div className="metric-label-caps">Analytics Stack</div>
              <div className="metric-detail-text">
                Advanced Excel, Power BI DAX, MySQL queries &amp; Python scripts.
              </div>
            </div>

            {/* Metric 2: Projects Completed */}
            <div className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">0{projectsData.length}</div>
                <div className="metric-tag-pill">MODELS</div>
              </div>
              <div className="metric-label-caps">Verified Case Studies</div>
              <div className="metric-detail-text">
                Retail e-commerce joins, executive BI dashboards, and summary models.
              </div>
            </div>

            {/* Metric 3: Academic Foundation */}
            <div className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">2026</div>
                <div className="metric-tag-pill">ACADEMIC</div>
              </div>
              <div className="metric-label-caps">Education Baseline</div>
              <div className="metric-detail-text">
                BBA Graduate (66.67%) &bull; Sir Issac Newton Arts &amp; Science &bull; Pursuing MBA.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
