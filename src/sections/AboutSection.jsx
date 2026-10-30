import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  PieChart, 
  Layers, 
  Sparkles, 
  Compass, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  Target 
} from 'lucide-react';
import { personalData } from '../data/personal';

export const AboutSection = () => {
  const getPillarIcon = (name) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp size={22} className="text-cyan-400" style={{ color: 'var(--color-accent-cyan)' }} />;
      case 'PieChart': return <PieChart size={22} className="text-indigo-400" style={{ color: 'var(--color-accent-violet)' }} />;
      case 'Layers': return <Layers size={22} className="text-emerald-400" style={{ color: 'var(--color-accent-emerald)' }} />;
      default: return <Sparkles size={22} className="text-amber-400" style={{ color: 'var(--color-accent-amber)' }} />;
    }
  };

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="section-title">A Little About Me</h2>
          <p className="section-subtitle">
            Bridging business administration principles with hands-on technical analytics.
          </p>
        </div>

        {/* Split Layout: Biography + Highlight Cards */}
        <div 
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Personal Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                How Business Strategy Met Data Analytics
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.96rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                <p>
                  {personalData.aboutStory.paragraph1}
                </p>
                <p>
                  {personalData.aboutStory.paragraph2}
                </p>
                <p>
                  {personalData.aboutStory.paragraph3}
                </p>
              </div>

              {/* Career Goal Callout Box */}
              <div 
                style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(56, 189, 248, 0.08)',
                  borderLeft: '4px solid var(--color-accent-cyan)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <Target size={24} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    My Career Goal
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)', fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{personalData.careerGoal}"
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Profile Summary Pills */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <div className="metric-pill">
                <span className="metric-label">College Background</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  Sir Issac Newton Arts &amp; Science College
                </span>
                <span className="metric-note">Nagapattinam, Tamil Nadu</span>
              </div>

              <div className="metric-pill">
                <span className="metric-label">Academic Scores</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-accent-cyan)' }}>
                  66.67% BBA (2026)
                </span>
                <span className="metric-note">Pursuing MBA Degree</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars of My Approach */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            
            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Key Competencies &amp; Mindset
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.35rem' }}>
                What I Bring To The Team
              </h3>
            </div>

            {personalData.pillars.map((pillar, idx) => (
              <div 
                key={pillar.title} 
                className="glass-card glass-card-hover"
                style={{
                  padding: '1.25rem 1.4rem',
                  display: 'flex',
                  gap: '1.1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {getPillarIcon(pillar.icon)}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {pillar.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Practical Work Ethic Card */}
            <div 
              style={{
                marginTop: '0.5rem',
                padding: '1.2rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--border-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <CheckCircle2 size={20} style={{ color: '#10b981', flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>Honest Growth Mindset:</strong> Learning through practical documentation, sample datasets, and genuine curiosity rather than exaggerated claims.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
