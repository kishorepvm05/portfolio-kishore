import React from 'react';
import { skillsData } from '../data/skills';

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="skills"
      aria-label="Expertise & Skills"
    >
      <div className="container">
        {/* Header */}
        <header className="skills__header reveal">
          <span className="about__section-num">04</span>
          <h2 className="about__section-title">Expertise</h2>
        </header>

        {/* Editorial skill grid */}
        <div className="skills__grid" role="list" aria-label="Skills">
          {skillsData.map((skill, idx) => (
            <article
              className={`skill-card reveal reveal-delay-${Math.min(idx + 1, 4)}`}
              key={skill.id}
              role="listitem"
            >
              <div className="skill-card__index" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className="skill-card__name">{skill.name}</h3>
              <div className="skill-card__category">{skill.category}</div>

              <div className="skill-card__topics" aria-label={`${skill.name} topics`}>
                {skill.topics.slice(0, 4).map((topic) => (
                  <div className="skill-card__topic" key={topic}>
                    {topic}
                  </div>
                ))}
              </div>

              <div className="skill-card__focus">{skill.currentFocus}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
