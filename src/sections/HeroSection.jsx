import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { GeometricSculpture } from '../components/GeometricSculpture';
import { MagneticButton } from '../components/MagneticButton';
import { TiltCard } from '../components/TiltCard';

const nameLetters = "KISHORE".split("");

const marqueeVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15
    }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
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

  return (
    <section id="hero" className="hero-agency-section" aria-label="Hero — Introduction">
      
      {/* Subtle Architectural Grid Lines */}
      <div className="hero-backdrop-lines" aria-hidden="true">
        <div className="backdrop-line-v backdrop-line-v-1" />
        <div className="backdrop-line-v backdrop-line-v-2" />
        <div className="backdrop-line-h" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Oversized KISHORE Typography Header with Letter Stagger Reveal */}
        <motion.div 
          className="hero-marquee-agency"
          initial="hidden"
          animate="visible"
          variants={marqueeVariants}
        >
          <div className="hero-large-name" style={{ display: 'flex', overflow: 'hidden' }}>
            {nameLetters.map((char, index) => (
              <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                {char}
              </motion.span>
            ))}
            <motion.span variants={charVariants} style={{ color: 'var(--accent-orange)' }}>
              .
            </motion.span>
          </div>

          <motion.div 
            className="hero-badge-capsule"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="badge-agency-dot" />
            <span>PORTFOLIO / 2026 ARCHIVE</span>
          </motion.div>
        </motion.div>

        {/* 3-Column Asymmetric Content Grid */}
        <div className="hero-asymmetric-grid">
          
          {/* Left Narrative Column */}
          <motion.div 
            className="hero-narrative-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <div className="hero-role-pill">
              <span className="badge-agency-dot" />
              <span>{personalData.role}</span>
            </div>

            <h1 className="hero-statement-title">
              Crafting clarity from <em>complex</em> datasets.
            </h1>

            <p className="hero-statement-body">
              Bridging strategic business administration with quantitative analytics. 
              Transforming raw transactional records into interactive Power BI dashboards, 
              structured relational SQL queries, and predictive decision frameworks.
            </p>

            <div className="hero-actions-group">
              <MagneticButton>
                <div 
                  onClick={() => scrollTo('#projects')}
                  className="btn-charcoal-pill"
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
                  className="btn-beige-pill"
                  aria-label="Download Resume"
                >
                  <Download size={15} />
                  <span>Resume</span>
                </a>
              </MagneticButton>
            </div>

            <div className="hero-stack-ticker">
              <span className="ticker-orange-tag">STACK:</span>
              <span>Microsoft Excel</span>
              <span style={{ color: 'var(--border-medium)' }}>&bull;</span>
              <span>Power BI</span>
              <span style={{ color: 'var(--border-medium)' }}>&bull;</span>
              <span>MySQL</span>
              <span style={{ color: 'var(--border-medium)' }}>&bull;</span>
              <span>Python</span>
            </div>
          </motion.div>

          {/* Center Abstract 3D Geometric Stage */}
          <motion.div 
            className="hero-sculpture-col"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            <div className="sculpture-card-frame">
              <GeometricSculpture />

              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 18px', borderTop: '1px solid var(--border-subtle)', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                <span>FIG 01 &bull; KINETIC SCULPTURE</span>
                <span style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>ROTATIONAL CORE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Statistics Column */}
          <motion.div 
            className="hero-metrics-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            <TiltCard className="agency-stat-card">
              <div className="stat-card-header">
                <div className="stat-number-display">04</div>
                <div className="stat-domain-pill">DOMAINS</div>
              </div>
              <div className="stat-label-text">Analytics Stack</div>
              <div className="stat-body-detail">
                Advanced Excel, Power BI DAX, MySQL queries &amp; Python scripts.
              </div>
            </TiltCard>

            <TiltCard className="agency-stat-card">
              <div className="stat-card-header">
                <div className="stat-number-display">0{projectsData.length}</div>
                <div className="stat-domain-pill">MODELS</div>
              </div>
              <div className="stat-label-text">Verified Case Studies</div>
              <div className="stat-body-detail">
                Retail e-commerce joins, executive BI dashboards, and summary models.
              </div>
            </TiltCard>

            <TiltCard className="agency-stat-card">
              <div className="stat-card-header">
                <div className="stat-number-display">2026</div>
                <div className="stat-domain-pill">ACADEMIC</div>
              </div>
              <div className="stat-label-text">Education Baseline</div>
              <div className="stat-body-detail">
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
