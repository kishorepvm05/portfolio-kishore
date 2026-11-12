import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  FileText, 
  Github, 
  Linkedin, 
  ArrowRight,
  Command,
  X
} from 'lucide-react';
import { personalData } from '../data/personal';

export const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const actions = [
    {
      id: 'home',
      name: 'Navigate to Home',
      category: 'Navigation',
      icon: <Home size={18} />,
      perform: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'about',
      name: 'About Kishore & Background',
      category: 'Navigation',
      icon: <User size={18} />,
      perform: () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'skills',
      name: 'Skills & Tech Stack Dashboard',
      category: 'Navigation',
      icon: <Cpu size={18} />,
      perform: () => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'projects',
      name: 'Selected Projects & Case Studies',
      category: 'Navigation',
      icon: <Briefcase size={18} />,
      perform: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'education',
      name: 'Education & Career Timeline',
      category: 'Navigation',
      icon: <GraduationCap size={18} />,
      perform: () => {
        document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      name: 'Get in Touch / Contact',
      category: 'Navigation',
      icon: <Mail size={18} />,
      perform: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'resume',
      name: 'Download Resume (PDF)',
      category: 'Actions',
      icon: <FileText size={18} />,
      perform: () => {
        window.open(personalData.resume.downloadUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'github',
      name: 'View GitHub Profile',
      category: 'Socials',
      icon: <Github size={18} />,
      perform: () => {
        window.open(personalData.contact.github, '_blank');
        onClose();
      }
    },
    {
      id: 'linkedin',
      name: 'Connect on LinkedIn',
      category: 'Socials',
      icon: <Linkedin size={18} />,
      perform: () => {
        window.open(personalData.contact.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter(action =>
    action.name.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="modal-backdrop-blur"
        onClick={onClose}
        style={{ zIndex: 3000 }}
      >
        <motion.div
          className="modal-dialog-cyber"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{ maxWidth: '620px', padding: 0, overflow: 'hidden' }}
        >
          {/* Search Input Bar */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border-subtle)', gap: '12px' }}>
            <Search size={20} style={{ color: 'var(--cyan)' }} />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or search sections... (Press ESC to exit)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                fontFamily: 'var(--font-heading)'
              }}
            />
            <button onClick={onClose} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
              <X size={18} />
            </button>
          </div>

          {/* Action List */}
          <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '8px' }}>
            {filteredActions.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                No commands matching &ldquo;{query}&rdquo;
              </div>
            ) : (
              filteredActions.map((action) => (
                <div
                  key={action.id}
                  onClick={action.perform}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    marginBottom: '4px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--cyan)' }}>
                      {action.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {action.name}
                      </div>
                      <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {action.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))
            )}
          </div>

          {/* Footer Helper */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 18px', background: 'rgba(0,0,0,0.3)', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Navigation Quick Menu</span>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 5px', borderRadius: '4px' }}>ESC</kbd> to close</span>
              <span><kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 5px', borderRadius: '4px' }}>&crarr;</kbd> to select</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;

