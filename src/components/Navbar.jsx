import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '../data/personal';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDark, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = NAV_ITEMS.map(item => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = href === '#hero' ? 0 : target.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="navbar-fixed">
        <motion.div 
          className="navbar-container"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            className="navbar-brand"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            aria-label="Kishore T — Return to top"
          >
            <div className="navbar-logo-badge">KT</div>
            <span className="navbar-brand-name">
              Kishore<span className="cyan-gradient-text">.dev</span>
            </span>
          </a>

          {/* Desktop Navigation Links with animated active pill */}
          <nav className="navbar-links" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  className={`nav-link-btn ${isActive ? 'active' : ''}`}
                  onClick={() => scrollTo(item.href)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="nav-indicator-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Status Indicator */}
          <div className="navbar-actions">
            <div className="availability-pill" title="Open to Data Analyst & BI Roles">
              <span className="availability-dot" />
              <span>Available for Work</span>
            </div>

            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Responsive Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span className="badge-tag">Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-secondary)' }}>
                <X size={24} />
              </button>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </button>
              );
            })}

            <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-futuristic-primary"
                style={{ width: '100%' }}
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
