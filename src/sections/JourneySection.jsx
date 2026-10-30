import React, { useState } from 'react';
import { 
  Compass, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  Layers, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { journeyMilestones } from '../data/journey';
import { TechIcon } from '../components/TechIcon';

export const JourneySection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Completed':
        return { bg: 'rgba(16, 185, 129, 0.12)', text: '#10b981', border: 'rgba(16, 185, 129, 0.3)' };
      case 'Active Practice':
        return { bg: 'rgba(56, 189, 248, 0.12)', text: 'var(--color-accent-cyan)', border: 'rgba(56, 189, 248, 0.3)' };
      case 'Ongoing Learning':
        return { bg: 'rgba(245, 158, 11, 0.12)', text: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)' };
      default:
        return { bg: 'rgba(129, 140, 248, 0.12)', text: '#818cf8', border: 'rgba(129, 140, 248, 0.3)' };
    }
  };

  return (
    <section id="journey" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} />
            <span>Growth Roadmap</span>
          </div>
          <h2 className="section-title">Currently Learning, Always Growing</h2>
          <p className="section-subtitle">
            A transparent and realistic roadmap of my progression from business management foundations to core analytics tools and forward-looking specializations.
          </p>
        </div>

        {/* Milestone Cards Path */}
        <div 
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative',
          }}
        >
          {journeyMilestones.map((milestone, index) => {
            const isExpanded = expandedId === milestone.id;
            const badgeStyle = getStatusBadgeStyle(milestone.status);

            return (
              <div 
                key={milestone.id}
                className="glass-card glass-card-hover"
                style={{
                  padding: '1.5rem 1.75rem',
                  borderLeft: `4px solid ${milestone.accentColor}`,
                  transition: 'all var(--transition-normal)',
                }}
              >
                {/* Header row */}
                <div 
                  onClick={() => toggleExpand(milestone.id)}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    
                    {/* Step Number Circle */}
                    <div 
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: `1px solid ${milestone.accentColor}50`,
                        color: milestone.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                          {milestone.title}
                        </h3>
                        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-cyan)' }}>
                          • {milestone.tool}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                        {milestone.period}
                      </div>
                    </div>

                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span 
                      className="badge"
                      style={{
                        backgroundColor: badgeStyle.bg,
                        color: badgeStyle.text,
                        border: `1px solid ${badgeStyle.border}`,
                        fontSize: '0.74rem',
                        fontWeight: 700,
                      }}
                    >
                      {milestone.statusBadge}
                    </span>

                    <button 
                      aria-label="Toggle details"
                      style={{
                        color: 'var(--color-text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Summary Snippet */}
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginTop: '0.9rem' }}>
                  {milestone.summary}
                </p>

                {/* Expanded Detailed Highlights */}
                {isExpanded && (
                  <div 
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-subtle)',
                      animation: 'fadeIn 0.2s ease-out',
                    }}
                  >
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.6rem' }}>
                      Key Focus &amp; Practical Practice:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {milestone.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                          <CheckCircle2 size={15} style={{ color: milestone.accentColor, flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Growth Philosophy Note */}
        <div 
          style={{
            maxWidth: '900px',
            margin: '2.5rem auto 0 auto',
            padding: '1.25rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg-card)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Sparkles size={22} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--color-text-primary)' }}>Lifelong Learner Mindset:</strong> Data tools evolve quickly. What remains constant is curiosity, rigorous problem formulation, and the discipline to verify insights through structured testing.
          </p>
        </div>

      </div>
    </section>
  );
};
