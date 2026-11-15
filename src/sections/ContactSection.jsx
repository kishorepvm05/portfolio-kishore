import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowUp, 
  Phone, 
  MessageSquare,
  Briefcase,
  GraduationCap,
  Copy,
  ExternalLink
} from 'lucide-react';
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalData.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Kishore T">
      <div className="container">
        
        {/* Contact Editorial Header */}
        <div className="contact-agency-container">
          <div className="contact-agency-split">
            
            {/* Left: Direct Info & Communication Channels */}
            <div>
              <span className="section-number-tag">05 / Direct Channel</span>
              <h2 className="contact-headline-serif">
                Let&apos;s build something <br />
                <em>data-driven</em> together.
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '28px' }}>
                Open to full-time Data Analyst, Business Intelligence, and Junior Analytics Associate opportunities. Available immediately for direct conversation via email, call, or WhatsApp.
              </p>

              {/* Direct Interactive Cards */}
              <div className="contact-cards-grid">
                
                {/* 1. Email Card (Clickable mailto & copy) */}
                <div className="contact-direct-card">
                  <div className="contact-direct-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-direct-info">
                    <span className="contact-direct-label">Official Email</span>
                    <a 
                      href={`mailto:${personalData.contact.email}`}
                      className="contact-direct-value"
                      title="Send email via mailto"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                  <button 
                    onClick={handleCopyEmail}
                    className="contact-copy-btn"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <CheckCircle2 size={16} style={{ color: '#10B981' }} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* 2. Phone & WhatsApp Card */}
                <div className="contact-direct-card">
                  <div className="contact-direct-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-direct-info">
                    <span className="contact-direct-label">Direct Phone &bull; Call &bull; WhatsApp</span>
                    <a 
                      href={`tel:${personalData.contact.phoneRaw}`}
                      className="contact-direct-value"
                      title="Click to call"
                    >
                      {personalData.contact.phone}
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <a 
                      href={personalData.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-whatsapp-btn"
                      title="Open WhatsApp chat"
                      aria-label="WhatsApp"
                    >
                      <MessageSquare size={15} />
                      <span>Chat</span>
                    </a>
                    <button 
                      onClick={handleCopyPhone}
                      className="contact-copy-btn"
                      title="Copy phone number"
                      aria-label="Copy phone"
                    >
                      {copiedPhone ? <CheckCircle2 size={16} style={{ color: '#10B981' }} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* 3. Professional Profiles: LinkedIn & Naukri */}
                <div className="contact-profiles-row">
                  {/* LinkedIn */}
                  <a 
                    href={personalData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-card"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Linkedin size={20} style={{ color: '#0A66C2' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>LinkedIn</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Professional Network</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'var(--accent-orange)' }} />
                  </a>

                  {/* Naukri */}
                  <a 
                    href={personalData.contact.naukri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-profile-card"
                    title="Naukri Profile (URL ready for update)"
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Briefcase size={20} style={{ color: '#1F51FF' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-charcoal)' }}>Naukri</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Job Profile Portal</div>
                      </div>
                    </div>
                    <ArrowUpRight size={16} style={{ color: 'var(--accent-orange)' }} />
                  </a>
                </div>

                {/* 4. Education & Academic Summary Banner */}
                <div className="contact-academic-banner">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <GraduationCap size={22} style={{ color: 'var(--accent-orange)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-charcoal)' }}>
                        MBA Candidate &bull; Sembodai R.V Arts and Science College
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                        Undergraduate: Sir Issac Newton Arts &amp; Science College (BBA 2026, 66.67%)
                      </div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={13} style={{ color: 'var(--accent-orange)' }} />
                        <span>{personalData.location.full}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Direct Email Form */}
            <div>
              {submitted ? (
                <div style={{ padding: '36px', background: 'var(--bg-surface-subtle)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                  <CheckCircle2 size={42} style={{ color: '#10B981', margin: '0 auto 16px auto' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '8px', color: 'var(--text-charcoal)' }}>
                    Email Draft Initialized!
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Your default mail client has opened pre-filled for <strong>{personalData.contact.email}</strong>. 
                    You can also call or message directly at <strong>{personalData.contact.phone}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-wrapper">
                  <div className="form-group-agency">
                    <label className="form-label-agency">Your Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Recruiter or Hiring Manager" 
                      className="form-input-agency" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group-agency">
                    <label className="form-label-agency">Your Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="manager@company.com" 
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
                      placeholder="Data Analyst Opportunity / Project Discussion" 
                      className="form-input-agency" 
                      value={formData.subject} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group-agency">
                    <label className="form-label-agency">Your Message *</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={4} 
                      placeholder="Hi Kishore, I reviewed your Power BI and SQL case studies..." 
                      className="form-textarea-agency" 
                      value={formData.message} 
                      onChange={handleChange} 
                    />
                  </div>

                  <MagneticButton style={{ width: '100%', marginTop: '8px' }}>
                    <button 
                      type="submit" 
                      className="btn-orange-glow-hire"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Send Direct Email</span>
                      <Send size={16} />
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-charcoal)' }}>
                &copy; {new Date().getFullYear()} Kishore T &bull; Data Analyst &amp; Business Intelligence
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Email: <a href={`mailto:${personalData.contact.email}`} style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>{personalData.contact.email}</a> &bull; Phone: <a href={`tel:${personalData.contact.phoneRaw}`} style={{ color: 'var(--text-charcoal)', fontWeight: 600 }}>{personalData.contact.phone}</a>
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                MBA: Sembodai R.V Arts &amp; Science College &bull; BBA (2026, 66.67%): Sir Issac Newton Arts &amp; Science
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              <a 
                href={personalData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Linkedin size={15} style={{ color: '#0A66C2' }} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>

              <a 
                href={personalData.contact.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <MessageSquare size={15} style={{ color: '#25D366' }} />
                <span>WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>

              <a 
                href={personalData.contact.naukri} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Briefcase size={15} style={{ color: '#1F51FF' }} />
                <span>Naukri</span>
                <ArrowUpRight size={13} />
              </a>

              <a 
                href={personalData.contact.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default ContactSection;
