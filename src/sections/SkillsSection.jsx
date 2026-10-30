import React, { useState } from 'react';
import { Layers, ChevronRight, CheckCircle2, Code2, Copy, Check, Info } from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';
import { TechIcon } from '../components/TechIcon';
import { Modal } from '../components/Modal';

export const SkillsSection = ({ onTriggerToast }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const handleCopyCode = (code) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
      if (onTriggerToast) {
        onTriggerToast({
          type: 'success',
          message: 'Code snippet copied to clipboard!'
        });
      }
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={14} />
            <span>Core Toolset</span>
          </div>
          <h2 className="section-title">Technical Skills Explorer</h2>
          <p className="section-subtitle">
            An honest, practical overview of the four core analytics technologies I actively practice.
            Click any skill to inspect learning notes and sample workflows.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem',
          }}
        >
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '0.5rem 1.1rem',
                fontSize: '0.85rem',
                fontWeight: activeCategory === cat.id ? 700 : 500,
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat.id ? 'var(--color-accent-cyan)' : 'var(--border-subtle)',
                backgroundColor: activeCategory === cat.id ? 'rgba(56, 189, 248, 0.14)' : 'var(--color-bg-card)',
                color: activeCategory === cat.id ? 'var(--color-accent-cyan)' : 'var(--color-text-secondary)',
                transition: 'all var(--transition-fast)',
                cursor: 'pointer',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div 
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedSkill(skill);
                }
              }}
              className="glass-card glass-card-hover"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: 'relative',
                borderTop: `4px solid ${skill.brandColor}`,
                overflow: 'hidden',
                outline: 'none',
              }}
            >
              {/* Top Bar: Brand Icon + Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'var(--color-bg-base)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 14px ${skill.accentGlow}`,
                  }}
                >
                  <TechIcon name={skill.id} size={30} />
                </div>

                <span 
                  className="badge" 
                  style={{
                    backgroundColor: skill.tagBg,
                    color: skill.brandColor,
                    border: `1px solid ${skill.brandColor}35`,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  {skill.badge}
                </span>
              </div>

              {/* Skill Name & Category */}
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>
                {skill.name}
              </h3>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)', marginBottom: '0.9rem' }}>
                {skill.category}
              </div>

              {/* Short Description */}
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {skill.shortDescription}
              </p>

              {/* Key Topics List (Chips) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem', flex: 1 }}>
                {skill.topics.slice(0, 5).map((topic) => (
                  <span 
                    key={topic}
                    className="tech-tag"
                    style={{ fontSize: '0.73rem' }}
                  >
                    {topic}
                  </span>
                ))}
                {skill.topics.length > 5 && (
                  <span className="tech-tag" style={{ color: 'var(--color-text-muted)', fontSize: '0.73rem' }}>
                    +{skill.topics.length - 5} more
                  </span>
                )}
              </div>

              {/* Interactive Click Indicator Footnote */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.82rem',
                  color: 'var(--color-accent-cyan)',
                  fontWeight: 600,
                }}
              >
                <span>View Learning Details</span>
                <ChevronRight size={16} />
              </div>

            </div>
          ))}
        </div>

        {/* Skill Interactive Information Modal */}
        <Modal
          isOpen={!!selectedSkill}
          onClose={() => setSelectedSkill(null)}
          title={selectedSkill ? `${selectedSkill.name}` : ""}
          subtitle={selectedSkill ? selectedSkill.category : ""}
        >
          {selectedSkill && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Header Banner */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg-base)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <TechIcon name={selectedSkill.id} size={42} />
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                    {selectedSkill.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                    {selectedSkill.shortDescription}
                  </p>
                </div>
              </div>

              {/* What I'm Currently Practicing */}
              <div 
                style={{
                  padding: '1.2rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', color: 'var(--color-accent-cyan)', fontWeight: 700, fontSize: '0.88rem' }}>
                  <Info size={16} />
                  <span>What I Am Currently Practicing &amp; Learning</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>
                  {selectedSkill.currentFocus}
                </p>
              </div>

              {/* Practical Real-World Application */}
              <div>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  How I Apply This Tool:
                </h5>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {selectedSkill.practicalApplication}
                </p>
              </div>

              {/* Topics Breakdown */}
              <div>
                <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                  Topics &amp; Capabilities Covered:
                </h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                  {selectedSkill.topics.map(t => (
                    <div 
                      key={t}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.84rem',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      <CheckCircle2 size={15} style={{ color: selectedSkill.brandColor, flexShrink: 0 }} />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Code / Formula Snippet */}
              {selectedSkill.sampleSnippet && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <h5 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {selectedSkill.sampleSnippet.label}
                    </h5>
                    <button
                      onClick={() => handleCopyCode(selectedSkill.sampleSnippet.code)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        color: copiedSnippet ? '#10b981' : 'var(--color-accent-cyan)',
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        cursor: 'pointer',
                      }}
                    >
                      {copiedSnippet ? <Check size={13} /> : <Copy size={13} />}
                      <span>{copiedSnippet ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>

                  <div className="code-box">
                    <div className="code-box-header">
                      <span>{selectedSkill.sampleSnippet.type.toUpperCase()} SNIPPET</span>
                      <span>UTF-8</span>
                    </div>
                    <pre>
                      <code>{selectedSkill.sampleSnippet.code}</code>
                    </pre>
                  </div>
                </div>
              )}

            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
