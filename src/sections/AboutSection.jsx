import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Target, 
  BookOpen, 
  Award, 
  MapPin, 
  GraduationCap, 
  TrendingUp, 
  PieChart, 
  Layers, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Kishore T">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">
            <span className="badge-tag-dot" />
            02 &bull; Background &amp; Philosophy
          </span>
          <h2 className="section-title">
            Blending Business Acumen With <span className="gradient-text">Analytical Precision</span>
          </h2>
          <p className="section-subtitle">
            Modern corporate decisions demand more than instinct. Here is how I connect management fundamentals to data-driven insights.
          </p>
        </div>

        {/* Split Grid Layout */}
        <div className="about-grid-split">
          
          {/* Left Column: Visual Portrait & Profile Details */}
          <motion.div 
            className="about-photo-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-photo-inner">
              {/* Abstract Data Matrix Backdrop */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.15), transparent 70%), linear-gradient(180deg, transparent 40%, rgba(3, 7, 18, 0.95) 100%)',
                  zIndex: 1
                }}
              />

              {/* Profile Card Header Graphic */}
              <div style={{ position: 'relative', zIndex: 2, marginBottom: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>
                  KT
                </div>
                <div className="badge-tag" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}>
                  Nagapattinam, IN
                </div>
              </div>

              {/* Personal Photo Overlay Information */}
              <div className="about-photo-overlay-content">
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cyan)' }}>
                  Candidate Profile
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, margin: '4px 0 6px 0' }}>
                  {personalData.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  BBA Graduate (2026, 66.67%) &bull; Currently Pursuing MBA
                </p>

                {/* Quick Academic & Career Stat Cards */}
                <div className="about-stat-strip">
                  <div className="about-stat-card">
                    <div className="about-stat-value">66.67%</div>
                    <div className="about-stat-label">BBA Score (2026)</div>
                  </div>

                  <div className="about-stat-card">
                    <div className="about-stat-value">MBA</div>
                    <div className="about-stat-label">Current Studies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Human Story & Core Pillars */}
          <motion.div 
            className="about-text-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="about-paragraph">
              {personalData.aboutStory.paragraph1}
            </p>

            <p className="about-paragraph">
              {personalData.aboutStory.paragraph2}
            </p>

            <p className="about-paragraph" style={{ borderLeft: '3px solid var(--cyan)', paddingLeft: '16px', color: 'var(--text-primary)', fontStyle: 'italic' }}>
              &ldquo;{personalData.aboutStory.paragraph3}&rdquo;
            </p>

            {/* 4 Core Pillars of Work */}
            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <TrendingUp size={20} style={{ color: 'var(--cyan)' }} />
                <h4 className="about-pillar-title">Business Context</h4>
                <p className="about-pillar-desc">
                  Understands business KPIs, revenue margins, and how clean data drives executive choices.
                </p>
              </div>

              <div className="about-pillar-card">
                <PieChart size={20} style={{ color: 'var(--electric-blue)' }} />
                <h4 className="about-pillar-title">Visual Storytelling</h4>
                <p className="about-pillar-desc">
                  Translates dry SQL queries into intuitive Power BI dashboards and executive Excel models.
                </p>
              </div>

              <div className="about-pillar-card">
                <Layers size={20} style={{ color: 'var(--emerald)' }} />
                <h4 className="about-pillar-title">Rigorous Hygiene</h4>
                <p className="about-pillar-desc">
                  Special focus on data validation, deduplication, schema relationships, and error handling.
                </p>
              </div>

              <div className="about-pillar-card">
                <Sparkles size={20} style={{ color: 'var(--amber)' }} />
                <h4 className="about-pillar-title">Constant Learning</h4>
                <p className="about-pillar-desc">
                  Daily hands-on practice solving real analytical challenges across databases and scripts.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
