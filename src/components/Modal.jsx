import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Database,
  Terminal,
  Code
} from 'lucide-react';
import { TechIcon } from './TechIcon';

export const Modal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-backdrop-blur"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div 
          className="modal-dialog-cyber"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <button 
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <TechIcon name={project.technology} size={28} />
            <span className="badge-tag" style={{ margin: 0 }}>
              {project.technology}
            </span>
            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              {project.statusBadge}
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, marginBottom: '6px' }}>
            {project.title}
          </h2>

          <p style={{ fontSize: '1rem', color: 'var(--cyan)', fontWeight: 500, marginBottom: '20px' }}>
            {project.subtitle}
          </p>

          {/* Overview Section */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Project Overview
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9375rem' }}>
              {project.overview}
            </p>
          </div>

          {/* Highlights Metrics Grid */}
          {project.highlights && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
              {project.highlights.map((hl, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '10px' }}>
                  <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {hl.metric}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {hl.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Key Learnings & Outcomes */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Technical Deliverables &amp; Outcomes
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.learningOutcomes.map((outcome, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--cyan)', marginTop: '3px', flexShrink: 0 }} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample SQL or Code preview if available */}
          {project.sampleQueries && project.sampleQueries[0] && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan)' }}>
                  {project.sampleQueries[0].title}
                </span>
                <Terminal size={14} style={{ color: 'var(--text-muted)' }} />
              </div>
              <div style={{ background: '#030712', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '14px', overflowX: 'auto' }}>
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#E2E8F0', lineHeight: 1.6 }}>
                  <code>{project.sampleQueries[0].sql}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tools.map((t, idx) => (
                <span key={idx} className="badge-tag" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-futuristic-primary"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <span>{project.githubLabel || 'View on GitHub'}</span>
              <Github size={16} />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
