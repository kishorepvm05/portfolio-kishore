import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export const EducationSection = () => {
  return (
    <section id="education" className="section-wrapper" aria-label="Education & Academic Journey">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-agency">
          <span className="section-number-tag">04 / Academic Pedigree</span>
          <h2 className="section-title-agency">
            Education &amp; <span className="serif-italic">Academic Baseline</span>
          </h2>
          <p className="section-lead-agency">
            Undergraduate business administration foundation paired with active postgraduate management studies.
          </p>
        </div>

        {/* Minimal Editorial Cards */}
        <div className="education-agency-list">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-agency-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="education-top-line">
                <h3 className="education-title-serif">
                  {edu.degree}
                </h3>
                <span className="badge-agency">
                  {edu.badge}
                </span>
              </div>

              <div className="education-sub-line">
                {edu.institution} &bull; {edu.location}
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '16px' }}>
                {edu.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                {edu.keyFocusAreas.map((area, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={14} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
