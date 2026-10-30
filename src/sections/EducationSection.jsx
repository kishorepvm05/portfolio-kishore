import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationData, academicHighlights } from '../data/education';

export const EducationSection = () => {
  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education &amp; Studies</h2>
          <p className="section-subtitle">
            Solid foundations in Business Administration paired with ongoing postgraduate studies.
          </p>
        </div>

        {/* Academic Highlights Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {academicHighlights.map((highlight) => (
            <div 
              key={highlight.label} 
              className="glass-card" 
              style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
                {highlight.label}
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-accent-cyan)', marginBottom: '0.25rem' }}>
                {highlight.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                {highlight.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Timeline Component */}
        <div 
          className="timeline-container"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          {/* Vertical connecting line */}
          <div 
            style={{
              position: 'absolute',
              top: '40px',
              bottom: '40px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--color-accent-cyan) 0%, #10b981 100%)',
              opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationData.map((edu, index) => (
              <div 
                key={edu.id}
                className="timeline-item"
                style={{
                  position: 'relative',
                  paddingLeft: '72px',
                }}
              >
                {/* Timeline node icon */}
                <div 
                  className="timeline-icon-wrap"
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '0',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: edu.isCurrent ? 'var(--color-bg-primary)' : 'var(--color-bg-surface)',
                    border: `2px solid ${edu.accentColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: edu.accentColor,
                    boxShadow: `0 0 16px ${edu.accentColor}35`,
                    zIndex: 2,
                  }}
                >
                  <GraduationCap size={20} />
                </div>

                {/* Timeline Card */}
                <div 
                  className="glass-card glass-card-hover"
                  style={{
                    padding: '1.75rem',
                    borderLeft: `4px solid ${edu.accentColor}`,
                  }}
                >
                  {/* Top Bar: Degree + Status Badge */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.6rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                      {edu.degree}
                    </h3>

                    <span 
                      className="badge" 
                      style={{
                        backgroundColor: `${edu.accentColor}18`,
                        color: edu.accentColor,
                        border: `1px solid ${edu.accentColor}40`,
                        fontWeight: 700,
                      }}
                    >
                      {edu.isCurrent && <span className="status-dot-pulse" style={{ backgroundColor: edu.accentColor }} />}
                      {edu.badge}
                    </span>
                  </div>

                  {/* Institution & Period details */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <BookOpen size={15} style={{ color: edu.accentColor }} />
                      <strong style={{ color: 'var(--color-text-primary)' }}>{edu.institution}</strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={15} style={{ color: 'var(--color-text-muted)' }} />
                      <span>{edu.location}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={15} style={{ color: 'var(--color-text-muted)' }} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {edu.description}
                  </p>

                  {/* Key Coursework Focus Areas */}
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
                      Key Subjects &amp; Focus Topics:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {edu.keyFocusAreas.map((topic) => (
                        <span 
                          key={topic}
                          className="tech-tag"
                          style={{
                            background: 'var(--color-bg-base)',
                            borderColor: 'var(--border-subtle)',
                            color: 'var(--color-text-secondary)',
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Percentage callout for BBA */}
                  {edu.gradeValue && (
                    <div 
                      style={{
                        marginTop: '1.25rem',
                        paddingTop: '0.9rem',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                        Official Undergrad Cumulative Score:
                      </span>
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>
                        {edu.gradeValue}
                      </span>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
