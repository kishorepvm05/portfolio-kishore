import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { personalData } from '../data/personal';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = ({ isDark, onToggleTheme, onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = ['projects', 'skills', 'about', 'education', 'contact'];

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
      <header className="nav-editorial-fixed">
        <div className="nav-editorial-inner">
          
          {/* Left Brand: Kishore */}
          <a
            href="#hero"
            className="nav-brand-group"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            aria-label="Kishore — Return to top"
          >
            <span className="nav-brand-name">Kishore</span>
            <span className="nav-brand-dot">•</span>
          </a>

          {/* Centered Editorial Navigation Links */}
          <nav className="nav-links-centered" aria-label="Editorial Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.href}
                  className={`nav-editorial-link ${isActive ? 'active' : ''}`}
                  onClick={() => scrollTo(item.href)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Pill Button + Quick Command + Theme */}
          <div className="nav-actions-right">
            <button
              onClick={onOpenCommandPalette}
              className="editorial-tag"
              title="Open Command Palette (Ctrl + K)"
              style={{ cursor: 'pointer', padding: '6px 12px' }}
            >
              <Search size={13} style={{ marginRight: 4 }} />
              <span>Menu</span>
            </button>

            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {/* Premium Black Pill CTA Button (As seen on top-right of reference) */}
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-editorial-pill"
              style={{ padding: '10px 22px', fontSize: '0.84rem' }}
            >
              <span>Get in Touch</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              style={{ display: 'none' }}
              id="mobile-nav-toggle-btn"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{ background: 'var(--bg-primary)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <span className="editorial-tag">Navigation</span>
              <button onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--text-primary)', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                className="mobile-nav-link"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)' }}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </button>
            ))}

            <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('#contact');
                }}
                className="btn-editorial-pill"
                style={{ width: '100%' }}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
