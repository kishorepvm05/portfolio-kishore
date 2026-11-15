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
  Phone,
  MessageSquare,
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
      name: 'About Kishore & MBA Background',
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
      name: 'Education & MBA at Sembodai R.V Arts',
      category: 'Navigation',
      icon: <GraduationCap size={18} />,
      perform: () => {
        document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'contact',
      name: 'Get in Touch / Contact Section',
      category: 'Navigation',
      icon: <Mail size={18} />,
      perform: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'email-direct',
      name: `Email Kishore (${personalData.contact.email})`,
      category: 'Direct Channels',
      icon: <Mail size={18} />,
      perform: () => {
        window.location.href = `mailto:${personalData.contact.email}`;
        onClose();
      }
    },
    {
      id: 'call-direct',
      name: `Call Mobile (${personalData.contact.phone})`,
      category: 'Direct Channels',
      icon: <Phone size={18} />,
      perform: () => {
        window.location.href = `tel:${personalData.contact.phoneRaw}`;
        onClose();
      }
    },
    {
      id: 'whatsapp-direct',
      name: 'Message on WhatsApp (+91 9677674025)',
      category: 'Direct Channels',
      icon: <MessageSquare size={18} />,
      perform: () => {
        window.open(personalData.contact.whatsappUrl, '_blank');
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
      id: 'linkedin',
      name: 'Connect on LinkedIn (Kishore T)',
      category: 'Socials',
      icon: <Linkedin size={18} />,
      perform: () => {
        window.open(personalData.contact.linkedin, '_blank');
        onClose();
      }
    },
    {
      id: 'naukri',
      name: 'View Naukri Profile',
      category: 'Socials',
      icon: <Briefcase size={18} />,
      perform: () => {
        window.open(personalData.contact.naukri, '_blank');
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
    <div className="command-palette-backdrop" onClick={onClose}>
      <motion.div 
        className="command-palette-container"
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'clamp(320px, 90vw, 580px)',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          border: '1px solid var(--border-medium)',
          overflow: 'hidden',
          zIndex: 9999
        }}
      >
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Search size={18} style={{ color: 'var(--accent-orange)' }} />
          <input
            type="text"
            placeholder="Type a command, section, or contact channel..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-charcoal)',
              fontSize: '1rem',
              fontFamily: 'var(--font-body)'
            }}
          />
          <button 
            onClick={onClose} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '8px' }}>
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => (
              <div
                key={action.id}
                onClick={action.perform}
                style={{
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-surface-subtle)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: 'var(--accent-orange)', display: 'flex' }}>
                    {action.icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-charcoal)' }}>
                      {action.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {action.category}
                    </div>
                  </div>
                </div>
                <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
              </div>
            ))
          ) : (
            <div style={{ padding: '28px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              No matching actions or sections found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        <div style={{
          padding: '10px 16px',
          backgroundColor: 'var(--bg-surface-subtle)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)'
        }}>
          <span>Kishore T &bull; Data Analyst &amp; BI</span>
          <span>ESC to close</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CommandPalette;
