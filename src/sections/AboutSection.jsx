import React from 'react';
import { personalData } from '../data/personal';

const facts = [
  { label: 'Location', value: personalData.location.full },
  { label: 'Education', value: `${personalData.educationSummary.degree} — ${personalData.educationSummary.percentage}` },
  { label: 'Currently', value: personalData.educationSummary.current },
  { label: 'College', value: personalData.educationSummary.college },
  { label: 'Status', value: personalData.availability.status },
];

export const AboutSection = () => {
  const { aboutStory, pillars } = personalData;

  return (
    <section
      id="about"
      className="about"
      aria-label="About Kishore T"
    >
      <div className="container">
        {/* Section header */}
        <header className="about__header reveal">
          <span className="about__section-num">02</span>
          <h2 className="about__section-title">About Me</h2>
        </header>

        <div className="about__grid">
          {/* Left column */}
          <div className="about__left">
            {/* Avatar placeholder */}
            <div className="about__avatar reveal">
              <span className="about__avatar-initials">KT</span>
              <span className="about__avatar-caption">Kishore T</span>
            </div>

            {/* Fact list */}
            <div className="about__facts reveal reveal-delay-1">
              {facts.map((f) => (
                <div className="about__fact" key={f.label}>
                  <span className="about__fact-label">{f.label}</span>
                  <span className="about__fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — story */}
          <div className="about__right">
            <div className="about__story reveal">
              <p>{aboutStory.paragraph1}</p>
              <p>{aboutStory.paragraph2}</p>
              <p>{aboutStory.paragraph3}</p>
            </div>

            {/* Pillars grid */}
            <div className="about__pillars reveal reveal-delay-2">
              {pillars.map((p) => (
                <div className="about__pillar" key={p.title}>
                  <div className="about__pillar-title">{p.title}</div>
                  <p className="about__pillar-desc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
