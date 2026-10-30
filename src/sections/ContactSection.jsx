import React from 'react';
import { personalData } from '../data/personal';

export const ContactSection = () => {
  const { contact } = personalData;

  return (
    <section
      id="contact"
      className="contact"
      aria-label="Contact Kishore T"
    >
      <div className="contact__inner">
        {/* Eyebrow */}
        <div className="contact__eyebrow reveal">
          <span className="contact__eyebrow-num">06</span>
          <span className="contact__eyebrow-line" aria-hidden="true" />
          <span className="contact__eyebrow-label">Get in Touch</span>
        </div>

        {/* Big headline */}
        <h2 className="contact__headline reveal reveal-delay-1">
          Let&apos;s make something<br />
          <em>great together.</em>
        </h2>

        {/* Email */}
        <a
          href={`mailto:${contact.email}`}
          className="contact__email-link reveal reveal-delay-2"
          aria-label={`Send email to ${contact.email}`}
        >
          {contact.emailDisplay}
        </a>

        {/* Social links */}
        <div className="contact__socials reveal reveal-delay-3">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            aria-label="GitHub profile"
          >
            <span aria-hidden="true">↗</span>
            <span className="contact__social-label">GitHub</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__social-link"
            aria-label="LinkedIn profile"
          >
            <span aria-hidden="true">↗</span>
            <span className="contact__social-label">LinkedIn</span>
          </a>
        </div>

        {/* Divider */}
        <div className="contact__divider reveal reveal-delay-4" aria-hidden="true" />

        {/* Footer row */}
        <footer className="contact__footer reveal reveal-delay-5">
          <p className="contact__copyright">
            © {new Date().getFullYear()} Kishore T — All rights reserved.
          </p>
          <a
            href={contact.portfolioRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__repo-link"
            aria-label="View portfolio source code on GitHub"
          >
            View Source ↗
          </a>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
