import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Database, 
  BarChart2, 
  FileSpreadsheet, 
  Code, 
  Terminal,
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { TechIcon } from '../components/TechIcon';

export const ProjectsSection = ({ onOpenModal }) => {
  return (
    <section id="projects" className="section-wrapper" aria-label="Selected Projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-tag">
            <span className="badge-tag-dot" />
            04 &bull; Selected Work
          </span>
          <h2 className="section-title">
            Case Studies &amp; <span className="gradient-text">Practical Data Models</span>
          </h2>
          <p className="section-subtitle">
            Hands-on database queries, interactive dashboards, and exploratory data scripts built on realistic retail and transactional datasets.
          </p>
        </div>

        {/* 2x2 Gallery Grid */}
        <div className="projects-gallery-grid">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card-cyber"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => onOpenModal(project)}
            >
              {/* Top Simulated Realistic Interface Mockup */}
              <div className="project-preview-mockup">
                <div className="project-mockup-inner">
                  {/* Window Bar */}
                  <div className="project-mockup-header">
                    <div className="mockup-dot" style={{ background: '#EF4444' }} />
                    <div className="mockup-dot" style={{ background: '#F59E0B' }} />
                    <div className="mockup-dot" style={{ background: '#10B981' }} />
                    <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                      {project.technology.toLowerCase()}-analysis.workspace
                    </span>
                  </div>

                  {/* Window Content Graphic */}
                  <div className="mockup-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--cyan)', fontWeight: 600 }}>
                        {project.subtitle}
                      </span>
                      <TechIcon name={project.technology} size={20} />
                    </div>

                    {/* Mini Visual Simulation based on Tech */}
                    {project.technology.includes('SQL') || project.technology.includes('MySQL') ? (
                      <div style={{ background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#94A3B8' }}>
                        <span style={{ color: '#06B6D4' }}>SELECT</span> c.category, <span style={{ color: '#3B82F6' }}>SUM</span>(amount) <br/>
                        <span style={{ color: '#06B6D4' }}>FROM</span> orders o <span style={{ color: '#06B6D4' }}>JOIN</span> categories ...
                      </div>
                    ) : project.technology.includes('Power BI') ? (
                      <div style={{ display: 'flex', gap: '6px', height: '42px', alignItems: 'flex-end', paddingTop: '4px' }}>
                        <div style={{ width: '22%', height: '60%', background: '#F2C811', borderRadius: '2px' }} />
                        <div style={{ width: '22%', height: '85%', background: '#F59E0B', borderRadius: '2px' }} />
                        <div style={{ width: '22%', height: '45%', background: '#F2C811', borderRadius: '2px' }} />
                        <div style={{ width: '22%', height: '100%', background: '#D97706', borderRadius: '2px' }} />
                      </div>
                    ) : project.technology.includes('Excel') ? (
                      <div style={{ background: 'rgba(16,124,65,0.15)', border: '1px solid rgba(16,124,65,0.3)', padding: '6px 8px', borderRadius: '4px', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#34D399' }}>
                        =XLOOKUP(B2, ItemMaster!A:A, ItemMaster!C:C)
                      </div>
                    ) : (
                      <div style={{ background: 'rgba(56,189,248,0.15)', border: '1px solid rgba(56,189,248,0.3)', padding: '6px 8px', borderRadius: '4px', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#38BDF8' }}>
                        def parse_and_summarize(records): ...
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body Information */}
              <div className="project-card-body">
                <div className="project-badge-row">
                  <span className="project-tech-pill">
                    {project.technology}
                  </span>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    DEMO MODEL
                  </span>
                </div>

                <h3 className="project-card-title">
                  {project.title}
                </h3>

                <p className="project-card-desc">
                  {project.shortDescription}
                </p>

                {/* Footer Action Strip */}
                <div className="project-action-row">
                  <span style={{ fontSize: '0.8rem', color: 'var(--cyan)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span>Inspect Case Study</span>
                    <ArrowUpRight size={15} />
                  </span>

                  <div style={{ display: 'flex', gap: '6px' }}>
                    {project.tools.slice(0, 2).map((tool, idx) => (
                      <span key={idx} style={{ fontSize: '0.7rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '4px' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
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
