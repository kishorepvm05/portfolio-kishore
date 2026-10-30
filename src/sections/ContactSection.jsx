import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  Clock
} from 'lucide-react';
import { personalData } from '../data/personal';

export const ContactSection = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please type a brief message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(personalData.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      if (onTriggerToast) {
        onTriggerToast({
          type: 'success',
          message: 'Email address copied to clipboard!'
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Formulate client mailto URL fallback as requested
    const recipient = personalData.contact.email;
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Kishore,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Trigger user's email client
      window.location.href = mailtoUrl;

      if (onTriggerToast) {
        onTriggerToast({
          type: 'success',
          message: 'Opening your default email client to send message!'
        });
      }
    }, 600);
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <MessageSquare size={14} />
            <span>Direct Outreach</span>
          </div>
          <h2 className="section-title">Let's Connect!</h2>
          <p className="section-subtitle">
            Have an opportunity, project idea, or just want to connect? I'd be happy to hear from you.
          </p>
        </div>

        {/* Split Grid: Contact Info Cards + Interactive Form */}
        <div 
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Details & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                Get In Touch Directly
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                I am actively seeking entry-level Data Analyst, Business Analyst, and Junior BI positions. Feel free to reach out via email or connect on professional networks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Email Box with One-Click Copy */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-cyan)' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        {personalData.contact.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-secondary btn-sm"
                    title="Copy email to clipboard"
                    style={{ padding: '0.45rem 0.75rem' }}
                  >
                    {copiedEmail ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                    <span style={{ fontSize: '0.78rem' }}>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* LinkedIn Link Card */}
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(10, 102, 194, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0a66c2' }}>
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn Profile</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-cyan)' }}>Open &rarr;</span>
                </a>

                {/* GitHub Link Card */}
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-primary)' }}>
                      <Github size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GitHub Profile</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                        Explore Code &amp; Queries
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-accent-cyan)' }}>Open &rarr;</span>
                </a>

                {/* Location Card */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.9rem 1.1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {personalData.location.full}
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Availability Note */}
            <div 
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <Clock size={20} style={{ color: '#10b981', flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>Notice Period:</strong> Immediately available for entry-level opportunities, internships, or junior analyst contracts.
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Fill out this form to launch your email client with your message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma or John Doe"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-base)',
                    border: `1px solid ${errors.name ? '#f43f5e' : 'var(--border-subtle)'}`,
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                />
                {errors.name && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={12} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@company.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-base)',
                    border: `1px solid ${errors.email ? '#f43f5e' : 'var(--border-subtle)'}`,
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                />
                {errors.email && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={12} />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Analyst Opportunity / Project Discussion"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-base)',
                    border: `1px solid ${errors.subject ? '#f43f5e' : 'var(--border-subtle)'}`,
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    transition: 'border-color var(--transition-fast)',
                  }}
                />
                {errors.subject && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={12} />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Kishore, I came across your portfolio and would like to speak regarding an entry-level analyst opening..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '0.9rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-base)',
                    border: `1px solid ${errors.message ? '#f43f5e' : 'var(--border-subtle)'}`,
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color var(--transition-fast)',
                  }}
                />
                {errors.message && (
                  <span style={{ fontSize: '0.75rem', color: '#f43f5e', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <AlertCircle size={12} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Backend Delivery Clarification Notice as specified in prompt */}
              <div 
                style={{
                  padding: '0.75rem 0.95rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'rgba(56, 189, 248, 0.06)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                <Info size={16} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  <strong>Delivery notice:</strong> Clicking "Send Message" triggers your default mail client with these pre-filled details. Direct automated email sending requires configuring an external service like Formspree or EmailJS.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '0.95rem',
                  marginTop: '0.5rem',
                }}
              >
                {isSubmitting ? (
                  <span>Preparing Email...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message (via Mailto)</span>
                  </>
                )}
              </button>

              {/* Success Message Banner */}
              {submitStatus === 'success' && (
                <div 
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Mail client opened with your pre-filled inquiry. Thank you for connecting!</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
