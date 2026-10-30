import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Terminal, 
  BarChart3, 
  FileSpreadsheet, 
  Database, 
  Code2, 
  Eye, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { TechIcon } from '../components/TechIcon';
import { Modal } from '../components/Modal';

export const ProjectsSection = ({ onTriggerToast }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCodeTab, setActiveCodeTab] = useState(0);

  const handleOpenGithub = (project) => {
    if (onTriggerToast) {
      onTriggerToast({
        type: 'info',
        message: `Opening repository for ${project.title}`
      });
    }
    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FolderGit2 size={14} />
            <span>Practical Portfolio Work</span>
          </div>
          <h2 className="section-title">Things I've Been Building</h2>
          <p className="section-subtitle">
            Demonstration projects built on real-world business scenarios to practice SQL queries, Power BI dashboards, Excel formulas, and Python scripts.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          className="projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.25rem',
          }}
        >
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="glass-card glass-card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                border: '1px solid var(--border-card)',
              }}
            >
              
              {/* Card Header: Technology Visual Window / Mini Dashboard Preview */}
              <div 
                style={{
                  height: '190px',
                  background: 'var(--color-bg-surface)',
                  borderBottom: '1px solid var(--border-subtle)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Background decorative glow */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${project.techBadgeColor}25 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                {/* Top Bar inside thumbnail */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--color-bg-card)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TechIcon name={project.technology} size={22} />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {project.technology}
                    </span>
                  </div>

                  {/* Explicit DEMO Badge */}
                  <span className="badge badge-demo">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Center visual snippet preview based on tech */}
                <div 
                  style={{
                    background: 'rgba(2, 6, 23, 0.85)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {project.technology === 'MySQL' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ color: '#38bdf8' }}>SELECT category, SUM(amount)</span>
                      <span style={{ color: '#e2e8f0' }}>FROM orders JOIN categories ...</span>
                      <span style={{ color: '#a855f7' }}>GROUP BY category ORDER BY 2 DESC;</span>
                    </div>
                  )}
                  {project.technology === 'Power BI' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ color: '#f2c811', fontWeight: 600 }}>DAX: Margin Growth %</div>
                        <div style={{ color: '#e2e8f0' }}>DIVIDE(Sales[Profit], Sales[Rev])</div>
                      </div>
                      <div style={{ color: '#10b981', fontWeight: 700 }}>+18.4% YoY</div>
                    </div>
                  )}
                  {project.technology === 'Microsoft Excel' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ color: '#10b981' }}>fx = XLOOKUP(A2, ItemMaster!A:A, ItemMaster!C:C)</span>
                      <span style={{ color: '#94a3b8' }}>Pivot: Revenue by Quarter &amp; Region</span>
                    </div>
                  )}
                  {project.technology === 'Python' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ color: '#38bdf8' }}>def parse_and_summarize(records):</span>
                      <span style={{ color: '#e2e8f0' }}>    return &#123;"avg_order": round(tot/n, 2)&#125;</span>
                    </div>
                  )}
                </div>

                {/* Bottom preview metadata */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--color-text-muted)', position: 'relative', zIndex: 1 }}>
                  <span>Interactive Walkthrough Available</span>
                  <span style={{ color: 'var(--color-accent-cyan)' }}>Click View Project &rarr;</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.4rem' }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.shortDescription}
                </p>

                {/* Key Learning Outcomes (Bullet Points) */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                    Key Learning Outcomes:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {project.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ lineHeight: 1.5 }}>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.75rem', marginTop: 'auto' }}>
                  {project.tools.map(tool => (
                    <span key={tool} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: View Project & GitHub */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveCodeTab(0);
                    }}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%' }}
                  >
                    <Eye size={15} />
                    <span>View Project</span>
                  </button>

                  <button
                    onClick={() => handleOpenGithub(project)}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%' }}
                    title="View GitHub repository"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Project Deep Dive Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject ? selectedProject.title : ""}
          subtitle={selectedProject ? `${selectedProject.technology} • ${selectedProject.subtitle}` : ""}
          maxWidth="780px"
        >
          {selectedProject && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Project Status Banner */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Sparkles size={18} style={{ color: '#fbbf24' }} />
                  <div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fbbf24' }}>
                      Demonstration &amp; Learning Showcase
                    </span>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>
                      Constructed using documented sample data to illustrate query syntax, modeling, and insights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  Project Overview &amp; Scenario
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                  {selectedProject.overview}
                </p>
              </div>

              {/* Highlights & Architecture */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                {selectedProject.highlights.map(h => (
                  <div key={h.metric} className="metric-pill">
                    <span className="metric-label">{h.metric}</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{h.value}</span>
                  </div>
                ))}
              </div>

              {/* All Learning Outcomes */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                  All Competencies &amp; Outcomes Demonstrated:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.learningOutcomes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code / Query Showcase */}
              {selectedProject.sampleQueries && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                    Sample SQL Queries Practiced:
                  </h4>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    {selectedProject.sampleQueries.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCodeTab(idx)}
                        style={{
                          padding: '0.4rem 0.8rem',
                          fontSize: '0.78rem',
                          fontWeight: activeCodeTab === idx ? 700 : 500,
                          borderRadius: '6px',
                          color: activeCodeTab === idx ? '#ffffff' : 'var(--color-text-secondary)',
                          backgroundColor: activeCodeTab === idx ? 'var(--color-accent-blue)' : 'var(--color-bg-base)',
                          border: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                        }}
                      >
                        Query #{idx + 1}
                      </button>
                    ))}
                  </div>
                  <div className="code-box">
                    <div className="code-box-header">
                      <span>{selectedProject.sampleQueries[activeCodeTab].title}</span>
                      <span>MySQL 8.0</span>
                    </div>
                    <pre>
                      <code>{selectedProject.sampleQueries[activeCodeTab].sql}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Power BI Demo Data Preview */}
              {selectedProject.demoDataPreview && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                    Interactive Model Metrics (Simulated Output):
                  </h4>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                      <thead>
                        <tr style={{ background: 'var(--color-bg-base)', textAlign: 'left', borderBottom: '1px solid var(--border-subtle)' }}>
                          <th style={{ padding: '0.6rem 0.9rem', color: 'var(--color-text-muted)' }}>Category</th>
                          <th style={{ padding: '0.6rem 0.9rem', color: 'var(--color-text-muted)' }}>Simulated Sales</th>
                          <th style={{ padding: '0.6rem 0.9rem', color: 'var(--color-text-muted)' }}>Margin %</th>
                          <th style={{ padding: '0.6rem 0.9rem', color: 'var(--color-text-muted)' }}>YoY Growth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedProject.demoDataPreview.map(row => (
                          <tr key={row.category} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                            <td style={{ padding: '0.6rem 0.9rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{row.category}</td>
                            <td style={{ padding: '0.6rem 0.9rem', color: 'var(--color-accent-cyan)' }}>{row.sales}</td>
                            <td style={{ padding: '0.6rem 0.9rem', color: 'var(--color-text-secondary)' }}>{row.margin}</td>
                            <td style={{ padding: '0.6rem 0.9rem', color: '#10b981', fontWeight: 600 }}>{row.growth}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Excel Workflow Preview */}
              {selectedProject.sampleFormulaWorkflow && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                    Spreadsheet Formula Architecture:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {selectedProject.sampleFormulaWorkflow.map((wf, idx) => (
                      <div key={idx} style={{ padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', background: 'var(--color-bg-base)', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-accent-emerald)', marginBottom: '0.25rem' }}>
                          {wf.step}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#e2e8f0', background: '#020617', padding: '0.5rem 0.75rem', borderRadius: '4px', marginBottom: '0.35rem' }}>
                          {wf.formula}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                          {wf.purpose}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Python Script Preview */}
              {selectedProject.sampleScript && (
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.6rem' }}>
                    Modular Python Script:
                  </h4>
                  <div className="code-box">
                    <div className="code-box-header">
                      <span>data_exploration.py</span>
                      <span>Python 3.14</span>
                    </div>
                    <pre>
                      <code>{selectedProject.sampleScript}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Bottom GitHub CTA */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => handleOpenGithub(selectedProject)}
                  className="btn btn-primary"
                >
                  <Github size={16} />
                  <span>{selectedProject.githubLabel}</span>
                  <ExternalLink size={14} />
                </button>
              </div>

            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
