import React, { useEffect } from 'react';

export const Modal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <article className="modal">
        {/* Close button */}
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Header */}
        <header className="modal__header">
          <div className="modal__status">{project.statusBadge}</div>
          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__subtitle">{project.subtitle}</p>
        </header>

        {/* Body */}
        <div className="modal__body">

          {/* Overview */}
          <section>
            <div className="modal__section-label">Overview</div>
            <p className="modal__overview">{project.overview}</p>
          </section>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <section>
              <div className="modal__section-label">Key Highlights</div>
              <div className="modal__highlights">
                {project.highlights.map((h) => (
                  <div className="modal__highlight" key={h.metric}>
                    <div className="modal__highlight-metric">{h.metric}</div>
                    <div className="modal__highlight-value">{h.value}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tools */}
          {project.tools && project.tools.length > 0 && (
            <section>
              <div className="modal__section-label">Tools & Technologies</div>
              <div className="modal__tools">
                {project.tools.map((t) => (
                  <span className="modal__tool-tag" key={t}>{t}</span>
                ))}
              </div>
            </section>
          )}

          {/* Learning Outcomes */}
          {project.learningOutcomes && project.learningOutcomes.length > 0 && (
            <section>
              <div className="modal__section-label">Learning Outcomes</div>
              <div className="modal__outcomes">
                {project.learningOutcomes.map((o, i) => (
                  <div className="modal__outcome" key={i}>{o}</div>
                ))}
              </div>
            </section>
          )}

          {/* GitHub CTA */}
          {project.githubUrl && (
            <div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__github-btn"
              >
                <span>↗</span>
                {project.githubLabel || 'View on GitHub'}
              </a>
            </div>
          )}

        </div>
      </article>
    </div>
  );
};

export default Modal;
