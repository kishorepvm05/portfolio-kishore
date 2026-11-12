import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  Code2, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { TechIcon } from '../components/TechIcon';

export const SkillsSection = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);

  const toggleExpand = (id) => {
    setExpandedSkill(expandedSkill === id ? null : id);
  };

  return (
    <section id="skills" className="section-wrapper" aria-label="Technical Skills & Competencies">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">
            <span className="badge-tag-dot" />
            03 &bull; Core Stack
          </span>
          <h2 className="section-title">
            Analytical Tooling &amp; <span className="gradient-text">Practical Competencies</span>
          </h2>
          <p className="section-subtitle">
            Focused technical skills developed through hands-on project implementations. Click any technology card to view practical workflows and syntax examples.
          </p>
        </div>

        {/* 4 Interactive Skill Cards Grid */}
        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const isExpanded = expandedSkill === skill.id;

            return (
              <motion.div
                key={skill.id}
                className="skill-card-premium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleExpand(skill.id)}
                style={{
                  '--card-glow': skill.accentGlow,
                  '--card-border-glow': skill.brandColor
                }}
              >
                {/* Header row */}
                <div className="skill-card-header">
                  <div className="skill-icon-bubble">
                    <TechIcon name={skill.name} size={32} />
                  </div>
                  <span className="skill-category-badge">
                    {skill.category}
                  </span>
                </div>

                {/* Name & Badge */}
                <h3 className="skill-card-name">
                  {skill.name}
                </h3>
                
                <p className="skill-card-desc">
                  {skill.shortDescription}
                </p>

                {/* Key Topic Chips */}
                <div className="skill-topics-tags">
                  {skill.topics.slice(0, 4).map((topic, i) => (
                    <span key={i} className="skill-topic-chip">
                      {topic}
                    </span>
                  ))}
                  {skill.topics.length > 4 && (
                    <span className="skill-topic-chip" style={{ color: 'var(--cyan)' }}>
                      +{skill.topics.length - 4} more
                    </span>
                  )}
                </div>

                {/* Expand / Collapse Footer Cue */}
                <div className="skill-expand-footer">
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Sparkles size={14} />
                    <span>{isExpanded ? 'Hide deep-dive notes' : 'Click to inspect notes & code'}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>

                {/* Accordion Expand Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden', paddingTop: '16px', marginTop: '16px', borderTop: '1px solid var(--border-subtle)' }}
                    >
                      {/* Practical Application */}
                      <div style={{ marginBottom: '14px' }}>
                        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                          Practical Application
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {skill.practicalApplication}
                        </p>
                      </div>

                      {/* Current Learning Focus */}
                      <div style={{ marginBottom: '14px' }}>
                        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                          Current Focus
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {skill.currentFocus}
                        </p>
                      </div>

                      {/* Code Snippet Box */}
                      {skill.sampleSnippet && (
                        <div style={{ background: 'rgba(0, 0, 0, 0.45)', borderRadius: '8px', padding: '12px', border: '1px solid var(--border-subtle)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>
                              {skill.sampleSnippet.label}
                            </span>
                            <Terminal size={12} style={{ color: 'var(--text-muted)' }} />
                          </div>
                          <pre style={{ margin: 0, fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#F8FAFC', overflowX: 'auto', lineHeight: 1.5 }}>
                            <code>{skill.sampleSnippet.code}</code>
                          </pre>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
