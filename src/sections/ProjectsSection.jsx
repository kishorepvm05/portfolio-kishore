import React from 'react';
import { projectsData } from '../data/projects';
import { personalData } from '../data/personal';

const TECH_COLORS = {
  MySQL: '#00758F',
  'Power BI': '#F2C811',
  'Microsoft Excel': '#107C41',
  Python: '#3B82F6',
};

export const ProjectsSection = ({ onOpenModal }) => {
  return (
    <section
      id="projects"
      className="projects"
      aria-label="Selected Work"
    >
      <div className="container">
        {/* Header */}
        <header className="projects__header">
          <div className="projects__title-group reveal">
            <span className="about__section-num">03</span>
            <h2 className="about__section-title">Selected Work</h2>
          </div>
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github-link reveal reveal-delay-1"
            aria-label="View all projects on GitHub"
          >
            View All on GitHub ↗
          </a>
        </header>

        {/* Project list */}
        <div
          className="projects__list"
          role="list"
          aria-label="Projects list"
        >
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className={`project-row reveal reveal-delay-${Math.min(idx + 1, 5)}`}
              role="listitem"
              onClick={() => onOpenModal(project)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenModal(project); }}
              tabIndex={0}
              aria-label={`${project.title} — click to view details`}
            >
              {/* Index */}
              <div className="project-row__num" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="project-row__body">
                <h3 className="project-row__title">{project.title}</h3>
                <div className="project-row__meta">
                  <span
                    className="project-row__tech"
                    style={{ borderColor: TECH_COLORS[project.technology] || 'var(--border)' }}
                  >
                    {project.technology}
                  </span>
                  <span className="project-row__year">2026</span>
                </div>
                <p className="project-row__desc">{project.shortDescription}</p>
              </div>

              {/* Arrow */}
              <div className="project-row__right">
                <span className="project-row__arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
