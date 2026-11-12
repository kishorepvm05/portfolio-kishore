import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { GeometricSculpture } from '../components/GeometricSculpture';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';

// Word & Character stagger animation variants
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const HeroSection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const nameLetters = "KISHORE".split("");

  return (
    <section id="hero" className="hero-editorial-section" aria-label="Hero — Introduction">
      
      {/* Subtle Architectural Grid Lines */}
      <div className="hero-backdrop-lines" aria-hidden="true">
        <div className="backdrop-line-v backdrop-line-v-1" />
        <div className="backdrop-line-v backdrop-line-v-2" />
        <div className="backdrop-line-h" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Top Massive Oversized Editorial Headline with Character Stagger */}
        <motion.div 
          className="hero-marquee-name-row"
          initial="hidden"
          animate="visible"
          variants={sentenceVariants}
        >
          <div className="hero-oversized-name" style={{ display: 'flex', overflow: 'hidden' }}>
            {nameLetters.map((char, index) => (
              <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                {char}
              </motion.span>
            ))}
            <motion.span variants={charVariants} className="orange-accent-dot">
              .
            </motion.span>
          </div>

          <motion.div 
            className="hero-archive-badge"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="orange-status-dot" />
            <span>PORTFOLIO / 2026 ARCHIVE</span>
          </motion.div>
        </motion.div>

        {/* 3-Column Creative Grid */}
        <div className="hero-editorial-grid">
          
          {/* 1. LEFT CONTENT: Narrative, Badges & Magnetic CTA */}
          <motion.div 
            className="hero-left-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="hero-role-badge">
              <span className="editorial-tag-dot" />
              <span>{personalData.role}</span>
            </div>

            <h1 className="hero-editorial-title">
              Crafting clarity from <em>complex</em> datasets.
            </h1>

            <p className="hero-editorial-bio">
              Bridging strategic business administration with quantitative analytics. 
              Transforming raw transactional records into interactive Power BI dashboards, 
              structured relational SQL queries, and predictive decision frameworks.
            </p>

            {/* Magnetic CTA Buttons */}
            <div className="hero-editorial-actions">
              <MagneticButton>
                <div 
                  onClick={() => scrollTo('#projects')}
                  className="btn-editorial-pill"
                  role="button"
                  tabIndex={0}
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </div>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href={personalData.resume.downloadUrl}
                  download={personalData.resume.fileName}
                  className="btn-editorial-outline"
                  aria-label="Download Resume"
                >
                  <Download size={15} />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </div>

            {/* Tech Ticker */}
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

          {/* 2. CENTER CONTENT: Kinetic 3D Geometric Sculpture Stage */}
          <motion.div 
            className="hero-center-sculpture-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="sculpture-stage-box">
              <div className="sculpture-warm-halo" />

              <GeometricSculpture />

              <div className="sculpture-caption">
                <span className="sculpture-axis">FIG 01 &bull; KINETIC SCULPTURE</span>
                <span className="sculpture-desc">ROTATIONAL GEOMETRY</span>
              </div>
            </div>
          </motion.div>

          {/* 3. RIGHT CONTENT: 3D Interactive Tilt Metric Cards */}
          <motion.div 
            className="hero-right-metrics"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            <TiltCard className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">04</div>
                <div className="metric-tag-pill">DOMAINS</div>
              </div>
              <div className="metric-label-caps">Analytics Stack</div>
              <div className="metric-detail-text">
                Advanced Excel, Power BI DAX, MySQL queries &amp; Python scripts.
              </div>
            </TiltCard>

            <TiltCard className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">0{projectsData.length}</div>
                <div className="metric-tag-pill">MODELS</div>
              </div>
              <div className="metric-label-caps">Verified Case Studies</div>
              <div className="metric-detail-text">
                Retail e-commerce joins, executive BI dashboards, and summary models.
              </div>
            </TiltCard>

            <TiltCard className="editorial-metric-card">
              <div className="metric-header-row">
                <div className="metric-number-large">2026</div>
                <div className="metric-tag-pill">ACADEMIC</div>
              </div>
              <div className="metric-label-caps">Education Baseline</div>
              <div className="metric-detail-text">
                BBA Graduate (66.67%) &bull; Sir Issac Newton Arts &amp; Science &bull; Pursuing MBA.
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
