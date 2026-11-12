import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { projectsData } from '../data/projects';
import { TechIcon } from '../components/TechIcon';

export const ProjectsSection = ({ onOpenModal }) => {
  return (
    <section id="projects" className="section-wrapper" aria-label="Selected Projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">03 / Portfolio</span>
          <h2 className="section-title">
            Featured <span className="serif-italic">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Hands-on database querying, business intelligence dashboard construction, and exploratory data scripts.
          </p>
        </div>

        {/* Editorial Project Rows */}
        <div className="projects-editorial-list">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-item-editorial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Left: Graphic Code/Visual Simulation */}
              <div className="project-preview-editorial">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <TechIcon name={project.technology} size={28} />
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>
                    0{index + 1} &bull; {project.technology}
                  </span>
                </div>

                <div style={{ margin: 'auto 0' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', fontWeight: 600, marginBottom: '6px' }}>
                    {project.subtitle}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-mono)' }}>
                    {project.tools.slice(0, 3).join(' • ')}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Verified Project Model</span>
                  <span style={{ color: '#C2A374' }}>View Case Details &rarr;</span>
                </div>
              </div>

              {/* Right: Narrative & Key Outcomes */}
              <div className="project-info-editorial">
                <div className="project-meta-strip">
                  <span className="project-tech-badge">
                    {project.technology}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    Learning Project &bull; 2026
                  </span>
                </div>

                <h3 className="project-editorial-title">
                  {project.title}
                </h3>

                <p className="project-editorial-desc">
                  {project.shortDescription}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <button
                    onClick={() => onOpenModal(project)}
                    className="btn-editorial-pill"
                    style={{ padding: '10px 20px', fontSize: '0.82rem' }}
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
