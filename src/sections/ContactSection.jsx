import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, ArrowUpRight, ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';
import { MagneticButton } from '../components/MagneticButton';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Kishore">
      <div className="container">
        
        {/* Contact Editorial Container */}
        <div className="contact-agency-container">
          <div className="contact-agency-split">
            
            {/* Left: Direct Info & Social Connections */}
            <div>
              <span className="section-number-tag">05 / Direct Channel</span>
              <h2 className="contact-headline-serif">
                Let&apos;s build something <br />
                <em>meaningful</em> together.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Currently available for entry-level Data Analyst, Business Intelligence, and Analytics Associate roles. Direct response guaranteed within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a 
                  href={`mailto:${personalData.contact.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-charcoal)', textDecoration: 'none', fontWeight: 600, fontSize: '0.98rem' }}
                >
                  <Mail size={18} style={{ color: 'var(--accent-orange)' }} />
                  <span>{personalData.contact.email}</span>
                </a>

                <a 
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}
                >
                  <Linkedin size={18} style={{ color: 'var(--accent-orange)' }} />
                  <span>LinkedIn Profile &rarr;</span>
                </a>

                <a 
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.92rem' }}
                >
                  <Github size={18} style={{ color: 'var(--accent-orange)' }} />
                  <span>GitHub Repositories &rarr;</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  <MapPin size={18} style={{ color: 'var(--accent-orange)' }} />
                  <span>{personalData.location.full}</span>
                </div>
              </div>
            </div>

            {/* Right: Minimal Form */}
            <div>
              {submitted ? (
                <div style={{ padding: '28px', background: 'var(--bg-surface-subtle)', borderRadius: '12px', textAlign: 'center' }}>
                  <CheckCircle2 size={38} style={{ color: 'var(--accent-orange)', margin: '0 auto 12px auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '6px', color: 'var(--text-charcoal)' }}>
                    Email Draft Ready!
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    Your email client has opened with your inquiry pre-filled. You can also write directly to {personalData.contact.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group-agency">
                    <label className="form-label-agency">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Alex Johnson" 
                      className="form-input-agency" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group-agency">
                    <label className="form-label-agency">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="alex@company.com" 
                      className="form-input-agency" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group-agency">
                    <label className="form-label-agency">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      placeholder="Data Analyst Opportunity" 
                      className="form-input-agency" 
                      value={formData.subject} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group-agency">
                    <label className="form-label-agency">Message</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4} 
                      placeholder="Hi Kishore, I'd like to discuss..." 
                      className="form-textarea-agency" 
                      value={formData.message} 
                      onChange={handleChange} 
                    />
                  </div>

                  <MagneticButton style={{ width: '100%', marginTop: '8px' }}>
                    <button 
                      type="submit" 
                      className="btn-charcoal-pill"
                      style={{ width: '100%' }}
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Memorable Advanced Footer with Oversized LET'S TALK */}
        <footer className="advanced-agency-footer">
          <div className="footer-marquee-row">
            <h2 className="footer-oversized-cta">
              LET&apos;S TALK<span style={{ color: 'var(--accent-orange)' }}>.</span>
            </h2>
            <MagneticButton>
              <div 
                onClick={scrollToTop} 
                className="btn-back-to-top-editorial"
                role="button"
                tabIndex={0}
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </div>
            </MagneticButton>
          </div>

          <div className="footer-agency-inner">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div>
                &copy; {new Date().getFullYear()} Kishore T &bull; Handcrafted with 70% UI &bull; 20% Typography &bull; 10% Motion.
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Sir Issac Newton Arts &amp; Science College &bull; BBA 2026 &bull; MBA Candidate
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <a 
                href={personalData.contact.portfolioRepo} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-charcoal)', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
              >
                <span>GitHub Repository</span>
                <ArrowUpRight size={14} />
              </a>
              <a 
                href={personalData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ContactSection;
