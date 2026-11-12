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
        <div className="section-header">
          <motion.span 
            className="section-number"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            03 / Portfolio
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="serif-italic">Case Studies</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hands-on database querying, business intelligence dashboard construction, and exploratory data scripts.
          </motion.p>
        </div>

        {/* Editorial Project Rows with 3D Tilt & Zoom */}
        <div className="projects-editorial-list">
          {projectsData.map((project, index) => (
            <TiltCard
              key={project.id}
              className="project-item-editorial"
              onClick={() => onOpenModal(project)}
            >
              {/* Left: Graphic Code/Visual Simulation with Hover Image Zoom */}
              <motion.div 
                className="project-preview-editorial"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
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
                  <span style={{ color: '#F97316', fontWeight: 600 }}>Inspect Case Study &rarr;</span>
                </div>
              </motion.div>

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
                    className="btn-editorial-pill"
                    style={{ padding: '10px 20px', fontSize: '0.82rem' }}
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
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
