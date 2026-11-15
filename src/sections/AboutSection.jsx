import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection = () => {
  return (
    <section id="about" className="section-wrapper" aria-label="About Kishore T">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-agency">
          <span className="section-number-tag">03 / Strategic Context</span>
          <h2 className="section-title-agency">
            Business Administration &amp; <span className="serif-italic">Analytical Rigor</span>
          </h2>
          <p className="section-lead-agency">
            Understanding why metrics matter to corporate decision-makers before writing the first formula, query, or dashboard layout.
          </p>
        </div>

        {/* Asymmetrical Editorial Layout */}
        <div className="about-asymmetric-layout">
          
          {/* Left Column: Narrative Flow */}
          <motion.div 
            className="about-narrative-flow"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-quote-lead">
              &ldquo;Modern business decisions aren&apos;t built on intuition alone—they rely on data-backed intelligence.&rdquo;
            </p>

            <p className="about-prose-paragraph">
              {personalData.aboutStory.paragraph1}
            </p>

            <p className="about-prose-paragraph">
              {personalData.aboutStory.paragraph2}
            </p>

            <p className="about-prose-paragraph">
              {personalData.aboutStory.paragraph3}
            </p>

            <div className="about-meta-row" style={{ flexWrap: 'wrap', gap: '16px' }}>
              <div className="about-meta-item">
                <MapPin size={17} style={{ color: 'var(--accent-orange)' }} />
                <span>{personalData.location.full}</span>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={17} style={{ color: 'var(--accent-orange)' }} />
                <span>MBA: {personalData.educationSummary.mbaCollege}</span>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={17} style={{ color: 'var(--accent-orange)' }} />
                <span>BBA (66.67%): {personalData.educationSummary.bbaCollege}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Strategic Pillars Stack */}
          <motion.div 
            className="about-pillars-column"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {personalData.pillars.map((pillar, idx) => (
              <div key={idx} className="agency-pillar-card">
                <div className="pillar-header">
                  <Sparkles size={16} style={{ color: 'var(--accent-orange)' }} />
                  <h4 className="pillar-name-heading">{pillar.title}</h4>
                </div>
                <p className="pillar-description-text">
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
