import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="navbar__inner">
          {/* Logo */}
          <a
            className="navbar__logo"
            href="#hero"
            aria-label="Kishore T — Back to top"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          >
            <div className="navbar__monogram" aria-hidden="true">KT</div>
            <span className="navbar__name">Kishore T</span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="navbar__link"
                onClick={() => scrollTo(link.href)}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Status pill */}
          <div className="navbar__status" aria-label="Availability status: Available">
            <span className="navbar__status-dot" aria-hidden="true" />
            Available
          </div>

          {/* Mobile toggle */}
          <button
            className={`navbar__toggle${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <nav
        className={`navbar__mobile${mobileOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className="navbar__mobile-link"
            onClick={() => scrollTo(link.href)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
