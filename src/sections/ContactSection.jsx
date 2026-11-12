import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/personal';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create standard mailto fallback with URL encoding
    const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Kishore T">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">
            <span className="badge-tag-dot" />
            06 &bull; Direct Outreach
          </span>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="section-subtitle">
            Whether you are scouting an ambitious Data Analyst, exploring a Business Intelligence junior role, or discussing analytics models—my inbox is always open.
          </p>
        </div>

        {/* Contact Glass Card */}
        <motion.div 
          className="contact-glass-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-grid">
            
            {/* Left Column: Direct Info & Social Connections */}
            <div className="contact-info-col">
              <h3 className="contact-info-headline">
                Have a project or opportunity in mind?
              </h3>

              <p className="contact-info-desc">
                Feel free to email me directly or send a message via the form. I typically respond within 24 hours.
              </p>

              {/* Direct Channels */}
              <div className="contact-channels">
                <a 
                  href={`mailto:${personalData.contact.email}`}
                  className="contact-channel-row"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="contact-channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Direct Email
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                      {personalData.contact.email}
                    </div>
                  </div>
                </a>

                <a 
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-row"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="contact-channel-icon">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Professional Network
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight size={14} style={{ color: 'var(--cyan)' }} />
                    </div>
                  </div>
                </a>

                <a 
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-row"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="contact-channel-icon">
                    <Github size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Code Repositories
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <span>github.com/kishorepvm05</span>
                      <ArrowUpRight size={14} style={{ color: 'var(--cyan)' }} />
                    </div>
                  </div>
                </a>

                <div className="contact-channel-row">
                  <div className="contact-channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Location
                    </div>
                    <div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                      {personalData.location.full}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-col">
              {submitted ? (
                <div style={{ padding: '30px', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <CheckCircle2 size={40} style={{ color: 'var(--emerald)', margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>
                    Email Client Triggered!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Your message draft has opened in your default email client. You can also write to me at <strong>{personalData.contact.email}</strong>.
                  </p>
                  <button
                    className="btn-futuristic-ghost"
                    onClick={() => setSubmitted(false)}
                    style={{ marginTop: '16px' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Johnson"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Data Analyst Opportunity / Discussion"
                      className="form-input"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      required
                      placeholder="Hi Kishore, I'd like to discuss an opportunity..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-futuristic-primary"
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </motion.div>

        {/* Global Footer */}
        <footer className="site-footer">
          <div className="footer-content">
            <div>
              &copy; {new Date().getFullYear()} {personalData.name}. Handcrafted with precision for high-impact analytics.
            </div>
            <div style={{ display: 'flex', gap: '18px' }}>
              <a href={personalData.contact.portfolioRepo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)' }}>
                GitHub Repository ↗
              </a>
              <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ContactSection;
