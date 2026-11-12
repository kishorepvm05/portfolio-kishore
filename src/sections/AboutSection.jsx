import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  TrendingUp, 
  PieChart, 
  Layers, 
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Kishore">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">01 / Background</span>
          <h2 className="section-title">
            The Intersection of <span className="serif-italic">Business</span> &amp; Analytics
          </h2>
          <p className="section-subtitle">
            How foundational management principles empower thoughtful data modeling and actionable business insights.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="about-editorial-grid">
          
          {/* Left Column: Narrative Story */}
          <motion.div 
            className="about-story-col"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-story-lead">
              &ldquo;Modern business decisions aren&apos;t built on guesswork—they rely on data-backed insights.&rdquo;
            </p>

            <p className="about-story-body">
              {personalData.aboutStory.paragraph1}
            </p>

            <p className="about-story-body">
              {personalData.aboutStory.paragraph2}
            </p>

            <p className="about-story-body">
              {personalData.aboutStory.paragraph3}
            </p>

            <div style={{ display: 'flex', gap: '20px', marginTop: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>{personalData.location.full}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <GraduationCap size={16} style={{ color: 'var(--accent-gold)' }} />
                <span>{personalData.educationSummary.college}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Pillars */}
          <motion.div 
            className="about-pillars-stack"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {personalData.pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-item-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={16} style={{ color: 'var(--accent-gold)' }} />
                  <h4 className="pillar-item-title">{pillar.title}</h4>
                </div>
                <p className="pillar-item-desc">
                  {pillar.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
