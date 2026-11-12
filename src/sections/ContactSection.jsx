import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2 } from 'lucide-react';
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

    const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Kishore">
      <div className="container">
        
        {/* Contact Editorial Container */}
        <div className="contact-editorial-box">
          <div className="contact-layout-split">
            
            {/* Left: Headline & Information */}
            <div>
              <span className="section-number">05 / Outreach</span>
              <h2 className="contact-title-editorial">
                Let&apos;s build something <br />
                <em>meaningful</em> together.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Open to entry-level Data Analyst, Business Intelligence, and Junior Analytics roles. Direct lines are open.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a 
                  href={`mailto:${personalData.contact.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  <Mail size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>{personalData.contact.email}</span>
                </a>

                <a 
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  <Linkedin size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>LinkedIn Profile &rarr;</span>
                </a>

                <a 
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}
                >
                  <Github size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>GitHub Repositories &rarr;</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-gold)' }} />
                  <span>{personalData.location.full}</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              {submitted ? (
                <div style={{ padding: '24px', background: 'var(--bg-card-subtle)', borderRadius: '12px', textAlign: 'center' }}>
                  <CheckCircle2 size={36} style={{ color: '#16A34A', margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '6px' }}>
                    Email Draft Ready!
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Your email client has opened with your inquiry pre-filled. You can also write directly to {personalData.contact.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="editorial-form-group">
                    <label className="editorial-form-label">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Alex Johnson" 
                      className="editorial-form-input" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="editorial-form-group">
                    <label className="editorial-form-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="alex@company.com" 
                      className="editorial-form-input" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="editorial-form-group">
                    <label className="editorial-form-label">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="Data Analyst Opportunity" 
                      className="editorial-form-input" 
                      value={formData.subject} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="editorial-form-group">
                    <label className="editorial-form-label">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4} 
                      placeholder="Hi Kishore, I'd like to discuss..." 
                      className="editorial-form-textarea" 
                      value={formData.message} 
                      onChange={handleChange} 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-editorial-pill"
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer-editorial">
          <div className="footer-inner-editorial">
            <div>
              &copy; {new Date().getFullYear()} Kishore T &bull; Designed &amp; Developed with Architectural Precision.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href={personalData.contact.portfolioRepo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}>
                GitHub Repository
              </a>
              <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                LinkedIn
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ContactSection;
