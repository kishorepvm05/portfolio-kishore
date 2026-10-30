import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Database, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personal';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {/* Identity Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                }}
              >
                K
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {personalData.name}
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              {personalData.tagline} BBA graduate currently pursuing MBA studies, continuously learning technical tools to uncover data stories.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>
              <Database size={14} className="text-cyan-400" style={{ color: 'var(--color-accent-cyan)' }} />
              <span>{personalData.location.full}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', fontSize: '0.88rem' }}>
              {['About', 'Skills', 'Projects', 'Education', 'Journey', 'Resume', 'Contact'].map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={{
                    textAlign: 'left',
                    color: 'var(--color-text-secondary)',
                    transition: 'color var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent-cyan)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Connect & Social Column */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Connect &amp; Social
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
              Open to entry-level Data Analyst, Business Analyst, and junior BI roles.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                className="btn btn-secondary btn-sm"
                aria-label="Email Kishore"
                title="Direct Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} {personalData.name}. Designed &amp; built with React.js &amp; Vite.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Demonstration data clearly marked</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--color-accent-cyan)',
                cursor: 'pointer',
              }}
            >
              <span>Back to top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
