import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle,
  Briefcase,
  GraduationCap,
  Layers,
  FolderGit2,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personal';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import { Modal } from '../components/Modal';

export const ResumeSection = ({ onTriggerToast }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleDownload = () => {
    // Fire festive celebration confetti
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // Ignore if blocked
    }

    if (onTriggerToast) {
      onTriggerToast({
        type: 'success',
        message: 'Downloading Kishore T Resume PDF...'
      });
    }

    // Trigger download
    const link = document.createElement('a');
    link.href = personalData.resume.downloadUrl;
    link.download = personalData.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Resume &amp; Qualifications</h2>
          <p className="section-subtitle">
            Review my verified academic background, practical analytics skills, and project portfolio in a standardized resume format.
          </p>
        </div>

        {/* Main Resume Showcase Card */}
        <div 
          className="glass-card"
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            padding: '2.5rem',
            border: '1px solid var(--border-card)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative ambient gradient */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '240px',
              height: '240px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
            
            {/* Top Overview Bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                  {personalData.name}
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-accent-cyan)', fontWeight: 600, marginTop: '0.2rem' }}>
                  {personalData.role} • {personalData.location.full}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
                  Education: BBA Graduate (66.67%, 2026) • Currently Pursuing MBA
                </div>
              </div>

              {/* Action Buttons: Download + View */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setIsViewerOpen(true)}
                  className="btn btn-secondary"
                  style={{ padding: '0.75rem 1.25rem' }}
                >
                  <Eye size={17} className="text-cyan-400" />
                  <span>View Resume</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="btn btn-primary"
                  style={{ padding: '0.75rem 1.4rem' }}
                >
                  <Download size={17} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Quick Summary Highlights of the Resume */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: 'var(--color-bg-surface)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-cyan)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <GraduationCap size={16} />
                  <span>Education</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  BBA from Sir Issac Newton Arts &amp; Science College (66.67%) + MBA studies in progress.
                </div>
              </div>

              <div style={{ background: 'var(--color-bg-surface)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <Layers size={16} />
                  <span>Technical Toolset</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Hands-on practice in Excel (formulas, pivot tables), Power BI, MySQL, and Python fundamentals.
                </div>
              </div>

              <div style={{ background: 'var(--color-bg-surface)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#818cf8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <FolderGit2 size={16} />
                  <span>Portfolio Projects</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  4 practical demonstration projects exploring retail data, query optimization, and KPI dashboards.
                </div>
              </div>
            </div>

            {/* Instruction Callout for User: How to customize resume PDF */}
            <div 
              style={{
                padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(56, 189, 248, 0.06)',
                border: '1px dashed rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <Sparkles size={18} style={{ color: 'var(--color-accent-cyan)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>Easy Customization:</strong> To replace this starter resume with your official PDF, simply copy your resume file to <code style={{ color: 'var(--color-accent-cyan)', fontFamily: 'var(--font-mono)' }}>public/resume.pdf</code> in your project folder. The download and preview buttons are already configured!
              </div>
            </div>

          </div>
        </div>

        {/* Full Formatted Digital Resume Viewer Modal */}
        <Modal
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          title={`Resume - ${personalData.name}`}
          subtitle={`${personalData.role} • Nagapattinam, India`}
          maxWidth="820px"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: 'var(--color-text-primary)' }}>
            
            {/* Modal Top Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button onClick={handlePrint} className="btn btn-secondary btn-sm">
                <Printer size={15} />
                <span>Print Resume</span>
              </button>
              <button onClick={handleDownload} className="btn btn-primary btn-sm">
                <Download size={15} />
                <span>Download PDF</span>
              </button>
            </div>

            {/* Resume Header */}
            <div style={{ borderBottom: '2px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>
                {personalData.name}
              </h2>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-accent-cyan)', marginTop: '0.2rem' }}>
                {personalData.role}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.35rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <span>📍 {personalData.location.full}</span>
                <span>📧 {personalData.contact.email}</span>
                <span>💼 Open to Entry-Level Roles</span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-cyan)', marginBottom: '0.5rem' }}>
                Career Objective
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                {personalData.careerGoal} Seeking entry-level opportunities as a Data Analyst or Business Intelligence Specialist where business administration knowledge and analytical tools can generate measurable value.
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-cyan)', marginBottom: '0.75rem' }}>
                Education
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {educationData.map(edu => (
                  <div key={edu.id} style={{ paddingLeft: '0.85rem', borderLeft: `3px solid ${edu.accentColor}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>{edu.degree}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
                      {edu.institution} • {edu.location}
                    </div>
                    {edu.gradeValue && (
                      <div style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 600, marginTop: '0.2rem' }}>
                        Cumulative Score: {edu.gradeValue}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-cyan)', marginBottom: '0.75rem' }}>
                Technical Skills
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
                {skillsData.map(s => (
                  <div key={s.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <strong style={{ minWidth: '130px', color: 'var(--color-text-primary)' }}>• {s.name}:</strong>
                    <span style={{ color: 'var(--color-text-secondary)' }}>{s.topics.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Demonstration Projects */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-cyan)', marginBottom: '0.75rem' }}>
                Demonstration Projects
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {projectsData.map(p => (
                  <div key={p.id} style={{ background: 'var(--color-bg-base)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)' }}>{p.title}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-cyan)', fontFamily: 'var(--font-mono)' }}>{p.technology}</span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                      {p.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Modal>

      </div>
    </section>
  );
};
