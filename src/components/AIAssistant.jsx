import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  MessageSquare, 
  User, 
  Cpu, 
  ChevronDown,
  Info
} from 'lucide-react';
import { personalData } from '../data/personal';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { educationData } from '../data/education';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I am Kishore's Portfolio AI Assistant. You can ask me about his data analytics skills, Power BI dashboards, SQL projects, BBA & MBA education, or how to get in touch!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge base intent processor
  const processQuery = (rawQuery) => {
    const q = rawQuery.toLowerCase();

    if (q.includes('who is') || q.includes('about') || q.includes('background') || q.includes('bio')) {
      return `Kishore T is an aspiring Data Analyst and Business Intelligence specialist based in Nagapattinam, Tamil Nadu, India. He holds a BBA (2026 graduate, 66.67%) from Sir Issac Newton Arts & Science College and is currently pursuing his MBA. He bridges commercial management strategy with analytical precision.`;
    }

    if (q.includes('skill') || q.includes('tools') || q.includes('tech stack') || q.includes('excel') || q.includes('power bi') || q.includes('sql') || q.includes('python')) {
      return `Kishore's core analytics stack includes:\n• Microsoft Excel: Advanced lookups (XLOOKUP), dynamic Pivot Tables, data cleaning & validation models.\n• Power BI: Interactive dashboards, Power Query ETL, DAX measures (CALCULATE, YoY growth, margins).\n• MySQL: Relational database queries, multi-table INNER/LEFT joins, aggregations, customer spending segmentation.\n• Python: Exploratory data analysis, CSV parsing, data structures, and automation.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('case study')) {
      return `Kishore has built 4 key practical data projects:\n1. E-Commerce Database Analysis (MySQL multi-table retail queries & RFM metrics)\n2. Sales & Performance Dashboard (Power BI dynamic slicers & executive KPIs)\n3. Excel Data Analysis & Summary Model (Automated staging & pivot reporting)\n4. Python Data Exploration Script (Tabular CSV parsing and statistical summaries)\nCheck the Projects section for full code samples!`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('mba') || q.includes('bba') || q.includes('percentage') || q.includes('score')) {
      return `Kishore's academic foundation:\n• Master of Business Administration (MBA): Currently Pursuing at Sir Issac Newton Arts & Science College.\n• Bachelor of Business Administration (BBA): Graduated in 2026 with 66.67% from Sir Issac Newton Arts & Science College, Nagapattinam.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin') || q.includes('github') || q.includes('phone') || q.includes('reach')) {
      return `You can reach Kishore directly:\n• Email: ${personalData.contact.email}\n• LinkedIn: ${personalData.contact.linkedin}\n• GitHub: ${personalData.contact.github}\nHe is currently open to entry-level Data Analyst, Business Intelligence, and Junior Analytics roles!`;
    }

    if (q.includes('resume') || q.includes('cv')) {
      return `You can download Kishore's official resume by clicking the 'Download Resume' button in the Hero section or accessing it at: ${personalData.resume.downloadUrl}`;
    }

    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return `Hello there! How can I assist you with exploring Kishore's portfolio today? Feel free to ask about his projects, skills, or background.`;
    }

    return `Thank you for asking! Kishore specializes in turning data into business insights using Excel, Power BI, MySQL, and Python. For detailed inquiries or custom projects, feel free to email him directly at ${personalData.contact.email} or use the contact form below.`;
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
    }, 600);
  };

  return (
    <>
      {/* Floating AI Bot Launcher Button */}
      <motion.button
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Portfolio Assistant"
        title="Chat with Kishore's Portfolio AI"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 998,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 30px -4px rgba(6, 182, 212, 0.5)',
          cursor: 'pointer'
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <Bot size={24} />
      </motion.button>

      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-dialog-cyber"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              bottom: '84px',
              left: '24px',
              width: '380px',
              maxWidth: 'calc(100vw - 48px)',
              height: '520px',
              maxHeight: 'calc(100vh - 120px)',
              padding: 0,
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -10px rgba(0,0,0,0.8)'
            }}
          >
            {/* Header */}
            <div style={{ padding: '16px 20px', background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2))', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Bot size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Portfolio AI Assistant
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--emerald)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="badge-tag-dot" style={{ width: 5, height: 5 }} />
                    <span>Trained on Kishore&apos;s Profile</span>
                  </div>
                </div>
              </div>

              <button onClick={() => setIsOpen(false)} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', flexShrink: 0, marginTop: 4 }}>
                      <Bot size={14} />
                    </div>
                  )}

                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '10px 14px',
                      borderRadius: m.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                      background: m.sender === 'user' ? 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)' : 'rgba(255, 255, 255, 0.05)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      lineHeight: 1.5,
                      border: m.sender === 'user' ? 'none' : '1px solid var(--border-subtle)',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  <Bot size={14} style={{ color: 'var(--cyan)' }} />
                  <span>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div style={{ padding: '6px 12px', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.2)' }}>
              {['Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setInput(item);
                  }}
                  style={{
                    fontSize: '0.72rem',
                    padding: '3px 8px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer'
                  }}
                >
                  {item}?
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} style={{ padding: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '8px', background: 'var(--bg-surface)' }}>
              <input
                type="text"
                placeholder="Ask a question about Kishore..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--cyan)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
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
