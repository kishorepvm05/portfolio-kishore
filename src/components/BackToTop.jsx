import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-accent-cyan)',
        color: 'var(--color-accent-cyan)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
        zIndex: 900,
        transition: 'all var(--transition-fast)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.backgroundColor = 'var(--color-accent-blue)';
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
        e.currentTarget.style.color = 'var(--color-accent-cyan)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};
