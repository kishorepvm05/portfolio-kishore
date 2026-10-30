import React from 'react';
import { personalData } from '../data/personal';

export const HeroSection = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Hero — Introduction"
    >
      <div className="hero__inner">
        {/* Left: Text content */}
        <div className="hero__left">
          {/* Eyebrow */}
          <div className="hero__eyebrow reveal">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <span className="hero__eyebrow-text">Data Analyst & BI</span>
          </div>

          {/* Main headline */}
          <h1 className="hero__headline reveal reveal-delay-1">
            Designing&nbsp;&amp;&nbsp;Building<br />
            Digital&nbsp;<em>Experiences.</em>
          </h1>

          {/* Name + Role */}
          <div className="hero__name-row reveal reveal-delay-2">
            <span className="hero__name">{personalData.name}</span>
            <span className="hero__role">Data Analyst &amp; Business Intelligence</span>
          </div>

          {/* Bio */}
          <p className="hero__bio reveal reveal-delay-3">
            BBA graduate with an analytical mindset — turning messy data into
            clear, actionable business insights using Excel, Power&nbsp;BI,
            MySQL, and Python.
          </p>

          {/* CTAs */}
          <div className="hero__ctas reveal reveal-delay-4">
            <button
              className="btn-primary"
              onClick={() => scrollTo('#projects')}
              aria-label="View my work"
            >
              View My Work
            </button>
            <button
              className="btn-text"
              onClick={() => scrollTo('#contact')}
              aria-label="Contact me"
            >
              Let&apos;s Talk&nbsp;→
            </button>
          </div>
        </div>

        {/* Right: Typographic / data composition */}
        <div className="hero__right" aria-hidden="true">
          <div className="hero__visual">
            {/* Large background text decoration */}
            <div className="hero__bg-text">KT</div>

            {/* Metrics card */}
            <div className="hero__metrics">
              {personalData.heroMetrics.map((m) => (
                <div className="hero__metric" key={m.label}>
                  <span className="hero__metric-value">{m.value}</span>
                  <span className="hero__metric-label">{m.label}</span>
                  <span className="hero__metric-note">{m.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-label">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
