import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  CornerDownLeft, 
  RefreshCw,
  Terminal,
  FileText,
  Mail,
  Linkedin,
  Phone
} from 'lucide-react';
import { personalData } from '../data/personal';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { educationData } from '../data/education';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Kishore's Interactive Portfolio Assistant. Feel free to ask about his Data Analyst background, MBA at Sembodai R.V Arts and Science College, Power BI and SQL projects, or how to contact him at ${personalData.contact.email} / ${personalData.contact.phone}.`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Knowledge base intent processor
  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase();

    if (q.includes('who is') || q.includes('about') || q.includes('background') || q.includes('bio')) {
      return `Kishore T is a Data Analyst & Business Intelligence specialist based in Nagapattinam, Tamil Nadu, India. He holds a BBA (2026 graduate, 66.67%) from Sir Issac Newton Arts & Science College and is currently pursuing his MBA at Sembodai R.V Arts and Science College. He bridges commercial management strategy with analytical precision.`;
    }

    if (q.includes('skill') || q.includes('tools') || q.includes('tech stack') || q.includes('excel') || q.includes('power bi') || q.includes('sql') || q.includes('python')) {
      return `Kishore's core analytics stack includes:\n• Microsoft Excel: Advanced lookups (XLOOKUP), dynamic Pivot Tables, data cleaning & validation models.\n• Power BI: Interactive dashboards, Power Query ETL, DAX measures (CALCULATE, YoY growth, margins).\n• MySQL: Relational database queries, multi-table INNER/LEFT joins, aggregations, customer spending segmentation.\n• Python: Exploratory data analysis, CSV parsing, data structures, and automation.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('case study')) {
      return `Kishore has built 4 practical data projects:\n1. E-Commerce Database Analysis (MySQL multi-table retail queries & RFM metrics)\n2. Sales & Performance Dashboard (Power BI dynamic slicers & executive KPIs)\n3. Excel Data Analysis & Summary Model (Automated staging & pivot reporting)\n4. Python Data Exploration Script (Tabular CSV parsing and statistical summaries)\nCheck the Projects section for full code samples!`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('mba') || q.includes('bba') || q.includes('percentage') || q.includes('score') || q.includes('sembodai')) {
      return `Kishore's academic foundation:\n• Master of Business Administration (MBA): Currently Pursuing at Sembodai R.V Arts and Science College.\n• Bachelor of Business Administration (BBA): Graduated in 2026 with 66.67% from Sir Issac Newton Arts and Science College.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin') || q.includes('github') || q.includes('phone') || q.includes('reach') || q.includes('call') || q.includes('mobile') || q.includes('whatsapp') || q.includes('naukri')) {
      return `You can reach Kishore directly:\n• Email: ${personalData.contact.email}\n• Phone / WhatsApp: ${personalData.contact.phone}\n• LinkedIn: ${personalData.contact.linkedin}\n• Naukri: ${personalData.contact.naukri}\n• GitHub: ${personalData.contact.github}\nHe is currently open to entry-level Data Analyst, Business Intelligence, and Analytics Associate roles!`;
    }

    if (q.includes('resume') || q.includes('cv')) {
      return `You can download Kishore's official resume by clicking the 'Download Resume' button in the Hero section or accessing it at: ${personalData.resume.downloadUrl}`;
    }

    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return `Hello there! How can I assist you with exploring Kishore's portfolio today? Feel free to ask about his projects, skills, or background.`;
    }

    return `Thank you for asking! Kishore specializes in turning data into business insights using Excel, Power BI, MySQL, and Python. For direct inquiries, feel free to email him at ${personalData.contact.email} or call +91 9677674025.`;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = processQuery(userText);
      const aiMsg = { id: (Date.now() + 1).toString(), sender: 'ai', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 550);
  };

  return (
    <>
      {/* Floating AI Bot Launcher Button */}
      <motion.button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Portfolio Guide"
        title="Chat with Kishore's AI Assistant"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '84px',
          zIndex: 99,
          background: 'var(--text-charcoal)',
          color: 'var(--bg-ivory)',
          border: '1px solid var(--accent-orange)',
          boxShadow: '0 8px 24px rgba(217, 119, 82, 0.25)'
        }}
      >
        <Sparkles size={18} style={{ color: 'var(--accent-orange)' }} />
      </motion.button>

      {/* AI Assistant Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-chat-drawer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '24px',
              width: 'clamp(320px, 92vw, 420px)',
              height: '540px',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: '20px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Drawer Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-surface-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--accent-orange-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-orange)'
                }}>
                  <Bot size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0, color: 'var(--text-charcoal)' }}>
                    Portfolio Guide
                  </h4>
                  <span style={{ fontSize: '0.72rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
                    Online &bull; Instant Answers
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                aria-label="Close Assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {messages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    justifyContent: m.sender === 'user' ? 'flex-end' : 'flex-start',
                    gap: '8px'
                  }}
                >
                  {m.sender === 'ai' && (
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: 'var(--accent-orange-soft)',
                      color: 'var(--accent-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <Bot size={14} />
                    </div>
                  )}

                  <div style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    backgroundColor: m.sender === 'user' ? 'var(--text-charcoal)' : 'var(--bg-surface-subtle)',
                    color: m.sender === 'user' ? 'var(--bg-ivory)' : 'var(--text-charcoal)',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-wrap',
                    border: m.sender === 'ai' ? '1px solid var(--border-subtle)' : 'none'
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'var(--accent-orange-soft)',
                    color: 'var(--accent-orange)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Bot size={14} />
                  </div>
                  <div style={{
                    padding: '8px 12px',
                    borderRadius: '12px',
                    background: 'var(--bg-surface-subtle)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}>
                    Typing...
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div style={{
              padding: '8px 14px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              background: 'var(--bg-surface-subtle)'
            }}>
              {['Contact details?', 'MBA College?', 'Analytics Stack?', 'View Projects'].map((qText, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(qText);
                  }}
                  style={{
                    fontSize: '0.74rem',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                >
                  {qText}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--bg-surface)'
            }}>
              <input
                type="text"
                placeholder="Ask about Kishore's skills, MBA, or projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-charcoal)',
                  fontSize: '0.86rem'
                }}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'var(--accent-orange)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: input.trim() ? 'pointer' : 'not-allowed',
                  opacity: input.trim() ? 1 : 0.6
                }}
                aria-label="Send query"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
