import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Download, Send, CheckCircle2, Linkedin, Phone } from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { MagneticButton } from '../components/MagneticButton';

const nameLetters = "KISHORE".split("");

const marqueeVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 32 },
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState('/images/kishore-portrait.jpg');

  // Mouse interactive parallax for the portrait stage
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 180, damping: 20 });
  const parallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 20 });
  const parallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), { stiffness: 180, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-dark-editorial" aria-label="Hero — Introduction">
      
      {/* Ambient Lighting & Architectural Grid */}
      <div className="hero-ambient-lights" aria-hidden="true">
        <div className="ambient-glow ambient-glow-orange" />
        <div className="ambient-glow ambient-glow-dark" />
        <div className="hero-grid-overlay" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Top Header Row: KISHORE Wordmark & Live Status Capsule */}
        <motion.div 
          className="hero-header-bar"
          initial="hidden"
          animate="visible"
          variants={marqueeVariants}
        >
          <div className="hero-wordmark-title" style={{ display: 'flex', overflow: 'hidden' }}>
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
            className="hero-availability-capsule"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="live-status-dot" />
            <span>AVAILABLE FOR HIRE &bull; 2026 ARCHIVE</span>
          </motion.div>
        </motion.div>

        {/* 2-Column Balanced Hero Composition: Left Intro & Actions, Right Large B&W Portrait */}
        <div className="hero-split-grid">
          
          {/* LEFT COLUMN: Narrative, Role, CTA Buttons & Stack */}
          <motion.div 
            className="hero-intro-column"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="hero-role-badge-tag">
              <span className="role-tag-bullet" />
              <span>{personalData.role}</span>
            </div>

            <h1 className="hero-headline-primary">
              Transforming complex data into <em>actionable</em> intelligence.
            </h1>

            <p className="hero-narrative-summary">
              Bridging strategic business administration with quantitative analytics. 
              Designing executive Power BI dashboards, structured MySQL relational architectures, 
              and automated Python exploratory models to drive strategic business outcomes.
            </p>

            {/* Premium CTA Buttons: Hire Me (Contact), Download Resume, & Direct LinkedIn */}
            <div className="hero-cta-actions">
              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#contact')}
                  className="btn-orange-glow-hire"
                  aria-label="Hire Me — Contact Kishore"
                >
                  <Send size={16} />
                  <span>Hire Me</span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href={personalData.resume.downloadUrl}
                  download={personalData.resume.fileName}
                  className="btn-charcoal-outline-resume"
                  aria-label="Download Kishore Resume"
                >
                  <Download size={15} />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-linkedin-pill"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin size={15} />
                  <span>LinkedIn</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <button 
                  onClick={() => scrollTo('#projects')}
                  className="btn-ghost-projects"
                  aria-label="Explore Projects"
                >
                  <span>View Projects</span>
                  <ArrowRight size={15} />
                </button>
              </MagneticButton>
            </div>

            {/* Core Stack Pill Strip */}
            <div className="hero-tech-strip">
              <span className="tech-strip-label">CORE STACK:</span>
              <div className="tech-strip-pills">
                <span className="tech-pill">Microsoft Excel</span>
                <span className="tech-separator">&bull;</span>
                <span className="tech-pill">Power BI</span>
                <span className="tech-separator">&bull;</span>
                <span className="tech-pill">MySQL</span>
                <span className="tech-separator">&bull;</span>
                <span className="tech-pill">Python</span>
              </div>
            </div>

            {/* Quick Metrics Bar below text with exact updated college info */}
            <div className="hero-quick-stats">
              <div className="quick-stat-item">
                <span className="quick-stat-num">04</span>
                <span className="quick-stat-lbl">Core Toolsets</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat-item">
                <span className="quick-stat-num">0{projectsData.length}</span>
                <span className="quick-stat-lbl">Verified Projects</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat-item">
                <span className="quick-stat-num">MBA</span>
                <span className="quick-stat-lbl">Sembodai R.V Arts</span>
              </div>
              <div className="quick-stat-divider" />
              <div className="quick-stat-item">
                <span className="quick-stat-num">BBA</span>
                <span className="quick-stat-lbl">66.67% &bull; Newton</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Large Profile Portrait with Subtle Dark Circle, Soft Orange Halo & B&W Treatment */}
          <motion.div 
            className="hero-portrait-column"
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div 
              className="portrait-interactive-stage"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Soft Orange Lighting Accent Halo behind circular backdrop */}
              <div className="portrait-orange-accent-halo" aria-hidden="true" />

              {/* Subtle Dark Circular / Rounded Backdrop */}
              <motion.div 
                className="portrait-backdrop-circle"
                style={{
                  rotateX,
                  rotateY,
                }}
              >
                <div className="backdrop-inner-glow" />
                <div className="backdrop-grid-rings" />
              </motion.div>

              {/* Full Upper-Body Portrait Image */}
              <motion.div 
                className="portrait-image-wrapper"
                style={{
                  x: parallaxX,
                  y: parallaxY,
                }}
              >
                <img 
                  src={imgSrc}
                  alt="Kishore T — Data Analyst & Business Intelligence"
                  className={`portrait-actual-img ${imageLoaded ? 'loaded' : ''}`}
                  loading="eager"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    if (imgSrc !== '/kishore-portrait.png') {
                      setImgSrc('/kishore-portrait.png');
                    }
                  }}
                />

                {/* Subtle Orange Rim Lighting Gradient */}
                <div className="portrait-orange-rim-overlay" aria-hidden="true" />
              </motion.div>

              {/* Verified Identity Badge Floating Card */}
              <motion.div 
                className="portrait-floating-badge"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="floating-badge-icon">
                  <CheckCircle2 size={16} />
                </div>
                <div className="floating-badge-text">
                  <span className="floating-badge-name">Kishore T</span>
                  <span className="floating-badge-role">Data Analyst &amp; BI &bull; MBA Candidate</span>
                </div>
              </motion.div>

              {/* Technical Spec Meta Label at base */}
              <div className="portrait-spec-tag">
                <span className="spec-dot" />
                <span>STUDIO PORTRAIT &bull; HIGH RESOLUTION ARCHIVE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
