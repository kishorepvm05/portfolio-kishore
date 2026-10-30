import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, Send } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '../data/personal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Journey' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  // Track scroll position & calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (totalScroll / windowHeight) * 100;
      setScrollProgress(scrollPercent);

      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section via scroll position
      const sections = ['hero', ...navLinks.map(l => l.id)];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'var(--gradient-primary)',
          zIndex: 1001,
          transition: 'width 100ms ease-out',
        }}
      />

      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '74px',
          backgroundColor: isScrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
          transition: 'all var(--transition-normal)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Identity */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            {/* Custom glowing icon mark */}
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)',
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '-0.02em',
              }}
            >
              K
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--color-text-primary)', letterSpacing: '-0.01em' }}>
                {personalData.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-accent-cyan)', fontWeight: 600, letterSpacing: '0.04em' }}>
                DATA ANALYST
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-accent-cyan)' : 'var(--color-text-secondary)',
                    backgroundColor: isActive ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'var(--color-text-secondary)';
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items: Theme Toggle + Contact CTA + Mobile Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ThemeToggle />

            {/* Quick Contact Button (Desktop) */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary btn-sm desktop-only"
              style={{ display: 'inline-flex' }}
            >
              <span>Get in Touch</span>
              <Send size={14} />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              className="mobile-only"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--border-card)',
                color: 'var(--color-text-primary)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '74px',
            backgroundColor: 'var(--color-bg-base)',
            zIndex: 999,
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            animation: 'fadeIn 0.2s ease-out',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--color-accent-cyan)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation Menu
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.85rem 1rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--color-accent-cyan)' : 'var(--color-text-primary)',
                  backgroundColor: isActive ? 'rgba(56, 189, 248, 0.12)' : 'var(--color-bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(56, 189, 248, 0.3)' : 'var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{link.label}</span>
                {isActive && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent-cyan)' }} />}
              </button>
            );
          })}

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <Send size={16} />
              <span>Get in Touch Directly</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive media rules for navbar */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
