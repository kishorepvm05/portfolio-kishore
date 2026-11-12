import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle,
  TrendingUp,
  Clock
} from 'lucide-react';
import { educationData } from '../data/education';

export const EducationSection = () => {
  return (
    <section id="education" className="section-wrapper" aria-label="Education & Academic Journey">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">
            <span className="badge-tag-dot" />
            05 &bull; Academic Foundation
          </span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Learning Journey</span>
          </h2>
          <p className="section-subtitle">
            Grounding strategic business problem-solving in management coursework while aggressively advancing technical proficiency in data analytics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-track-line" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="timeline-node-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-node-dot" />

              <div className="timeline-card-box">
                {/* Header Row */}
                <div className="timeline-header-row">
                  <h3 className="timeline-title">
                    {edu.degree}
                  </h3>

                  <span 
                    className="timeline-status-badge"
                    style={{
                      background: edu.isCurrent ? 'rgba(6, 182, 212, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                      border: `1px solid ${edu.isCurrent ? 'rgba(6, 182, 212, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                      color: edu.isCurrent ? 'var(--cyan)' : 'var(--emerald)'
                    }}
                  >
                    {edu.badge}
                  </span>
                </div>

                {/* Institution & Location */}
                <div className="timeline-institution">
                  {edu.institution} &bull; {edu.location}
                </div>

                {/* Description */}
                <p className="timeline-description">
                  {edu.description}
                </p>

                {/* Key Focus Area Bullets */}
                <div className="timeline-bullets">
                  {edu.keyFocusAreas.map((area, i) => (
                    <div key={i} className="timeline-bullet-item">
                      <CheckCircle size={13} style={{ color: 'var(--cyan)', flexShrink: 0 }} />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Additional Ongoing Practical Learning Node */}
          <motion.div
            className="timeline-node-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="timeline-node-dot" style={{ borderColor: 'var(--violet)', boxShadow: '0 0 12px var(--violet)' }} />

            <div className="timeline-card-box">
              <div className="timeline-header-row">
                <h3 className="timeline-title">
                  Self-Directed Data Analytics &amp; BI Mastery
                </h3>
                <span 
                  className="timeline-status-badge"
                  style={{
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: 'var(--violet)'
                  }}
                >
                  Continuous &bull; 2025–Present
                </span>
              </div>

              <div className="timeline-institution">
                Independent Projects &bull; GitHub Version Control
              </div>

              <p className="timeline-description">
                Dedicated daily practice in relational database modeling, writing clean nested formulas in Excel, structuring star schema models with DAX measures, and scripted Python data cleaning.
              </p>

              <div className="timeline-bullets">
                <div className="timeline-bullet-item">
                  <CheckCircle size={13} style={{ color: 'var(--violet)', flexShrink: 0 }} />
                  <span>Advanced XLOOKUP &amp; Dynamic Pivot Tables</span>
                </div>
                <div className="timeline-bullet-item">
                  <CheckCircle size={13} style={{ color: 'var(--violet)', flexShrink: 0 }} />
                  <span>DAX Measures (CALCULATE, RELATED, DIVIDE)</span>
                </div>
                <div className="timeline-bullet-item">
                  <CheckCircle size={13} style={{ color: 'var(--violet)', flexShrink: 0 }} />
                  <span>Multi-Table SQL Joins &amp; Window Functions</span>
                </div>
                <div className="timeline-bullet-item">
                  <CheckCircle size={13} style={{ color: 'var(--violet)', flexShrink: 0 }} />
                  <span>CSV Parsing &amp; Statistical Aggregations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
