import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 450);
          return 100;
        }
        const diff = Math.random() * 18 + 12;
        return Math.min(prev + Math.floor(diff), 100);
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen-overlay"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1] }
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#191919',
        color: '#F7F5EF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4.5rem)',
        pointerEvents: 'all'
      }}
    >
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-agency-dot" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#B0ADA6' }}>
            STUDIO KISHORE &bull; 2026 ARCHIVE
          </span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#D97752', letterSpacing: '0.1em' }}>
          DATA ANALYTICS &bull; BI
        </span>
      </div>

      {/* Middle Animated Typography Display */}
      <div style={{ maxWidth: '960px' }}>
        <div style={{ overflow: 'hidden', marginBottom: '12px' }}>
          <motion.div
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', 
              fontWeight: 900, 
              lineHeight: 0.92,
              letterSpacing: '-0.05em'
            }}
          >
            KISHORE<span style={{ color: '#D97752' }}>.</span>
          </motion.div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontStyle: 'italic', 
              fontSize: 'clamp(1.4rem, 3.2vw, 2.4rem)', 
              color: '#B0ADA6' 
            }}
          >
            Crafting clarity from complex datasets.
          </motion.div>
        </div>
      </div>

      {/* Bottom Progress Counter */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '1px solid rgba(247,245,239,0.12)', paddingTop: '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', color: '#7A7873', textTransform: 'uppercase' }}>
            Initializing kinetic geometry &bull; Star schema pipelines &bull; 60 FPS
          </span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 700, color: '#F7F5EF', lineHeight: 1 }}>
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
