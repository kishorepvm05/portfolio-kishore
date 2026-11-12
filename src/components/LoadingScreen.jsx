import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        const diff = Math.random() * 15 + 8;
        return Math.min(prev + Math.floor(diff), 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#121110',
        color: '#FAF8F5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4rem)',
        pointerEvents: 'all'
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#857F77' }}>
          KISHORE T &bull; PORTFOLIO
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#F97316' }}>
          &copy; 2026 ARCHIVE
        </span>
      </div>

      {/* Middle Animated Typography Display */}
      <div style={{ maxWidth: '800px' }}>
        <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', 
              fontWeight: 900, 
              lineHeight: 0.95,
              letterSpacing: '-0.04em'
            }}
          >
            DATA ANALYST<span style={{ color: '#F97316' }}>.</span>
          </motion.div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 60 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontStyle: 'italic', 
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', 
              color: '#A8A29E' 
            }}
          >
            Turning information into strategic vision.
          </motion.div>
        </div>
      </div>

      {/* Bottom Progress Counter */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="editorial-tag-dot" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em', color: '#857F77', textTransform: 'uppercase' }}>
            Initializing kinetic geometry &amp; visual models
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#FAF8F5' }}>
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
