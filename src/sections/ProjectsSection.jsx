import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { TechIcon } from '../components/TechIcon';
import { TiltCard } from '../components/TiltCard';

export const ProjectsSection = ({ onOpenModal }) => {
  return (
    <section id="projects" className="section-wrapper" aria-label="Selected Projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-agency">
          <span className="section-number-tag">01 / Portfolio Archive</span>
          <h2 className="section-title-agency">
            Selected <span className="serif-italic">Case Studies</span>
          </h2>
          <p className="section-lead-agency">
            Structured relational database joins, interactive executive BI reports, and automated data cleaning models.
          </p>
        </div>

        {/* Asymmetric Project Cards Stack */}
        <div className="projects-editorial-stack">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard 
                className="project-row-agency"
                onClick={() => onOpenModal(project)}
              >
                {/* Left: Graphic Code/Visual Simulation */}
                <motion.div 
                  className="project-graphic-stage"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-graphic-header">
                    <TechIcon name={project.technology} size={30} />
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                      CASE 0{index + 1} &bull; {project.technology}
                    </span>
                  </div>

                  <div style={{ margin: 'auto 0' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '6px' }}>
                      {project.subtitle}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
                      {project.tools.slice(0, 3).join(' • ')}
                    </div>
                  </div>

                  <div className="project-graphic-footer">
                    <span style={{ color: 'rgba(255,255,255,0.6)' }}>Verified Analytical Model</span>
                    <span style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>Inspect Case Study &rarr;</span>
                  </div>
                </motion.div>

                {/* Right: Narrative Details */}
                <div className="project-details-column">
                  <div className="project-category-row">
                    <span className="project-tech-pill-tag">
                      {project.technology}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      Portfolio Release &bull; 2026
                    </span>
                  </div>

                  <h3 className="project-name-editorial">
                    {project.title}
                  </h3>

                  <p className="project-synopsis-text">
                    {project.shortDescription}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <button
                      className="btn-charcoal-pill"
                      style={{ padding: '11px 22px', fontSize: '0.84rem' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal(project);
                      }}
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
