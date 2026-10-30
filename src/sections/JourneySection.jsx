import React from 'react';
import { journeyMilestones } from '../data/journey';

const ACTIVE_STATUSES = ['Active Practice', 'Ongoing Learning', 'Next Horizon'];

export const JourneySection = () => {
  return (
    <section
      id="journey"
      className="journey"
      aria-label="Learning Journey"
    >
      <div className="container">
        {/* Header */}
        <header className="journey__header reveal">
          <span className="about__section-num">05</span>
          <h2 className="about__section-title">Journey</h2>
        </header>

        {/* Timeline */}
        <div className="journey__timeline" role="list" aria-label="Learning milestones">
          {journeyMilestones.map((item, idx) => {
            const isActive = ACTIVE_STATUSES.includes(item.status);
            return (
              <article
                key={item.id}
                className={`journey__item reveal reveal-delay-${Math.min(idx + 1, 5)}${isActive ? ' active' : ''}`}
                role="listitem"
              >
                {/* Year / Period */}
                <div className="journey__year">{item.period}</div>

                {/* Content */}
                <div className="journey__content">
                  <div className="journey__phase">{item.phase}</div>
                  <h3 className="journey__title">{item.title}</h3>
                  <div className="journey__tool">{item.tool}</div>
                  <p className="journey__summary">{item.summary}</p>

                  <div className="journey__highlights">
                    {item.highlights.map((h, i) => (
                      <div className="journey__highlight" key={i}>{h}</div>
                    ))}
                  </div>

                  <div className={`journey__status${isActive ? ' active' : ''}`}>
                    {item.statusBadge}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
