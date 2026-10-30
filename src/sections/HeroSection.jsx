import React, { useState } from 'react';
import { ArrowRight, Sparkles, Download, Layers, Database, BarChart3, TrendingUp, CheckCircle, ExternalLink, Code2 } from 'lucide-react';
import { personalData } from '../data/personal';
import { TechIcon } from '../components/TechIcon';

export const HeroSection = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sample DEMO data for the live interactive hero chart visual
  const chartDatasets = {
    overview: {
      title: "Quarterly Revenue & Margin Trend",
      subtitle: "Simulated retail transaction metrics",
      bars: [
        { label: "Q1", value: 65, color: "#0284c7" },
        { label: "Q2", value: 82, color: "#38bdf8" },
        { label: "Q3", value: 74, color: "#00758f" },
        { label: "Q4", value: 95, color: "#10b981" },
      ],
      kpi1: { label: "Simulated Orders", val: "14,280", trend: "+12.4%" },
      kpi2: { label: "Model Accuracy", val: "99.2%", trend: "Optimal" },
    },
    category: {
      title: "Category Contribution Analysis",
      subtitle: "Simulated sales by product line",
      bars: [
        { label: "Tech", value: 88, color: "#38bdf8" },
        { label: "Apparel", value: 58, color: "#818cf8" },
        { label: "Home", value: 72, color: "#10b981" },
        { label: "Office", value: 46, color: "#f2c811" },
      ],
      kpi1: { label: "Top Category", val: "Tech Hardware", trend: "38% Share" },
      kpi2: { label: "Gross Margin", val: "34.6%", trend: "+2.8%" },
    },
  };

  const currentDataset = chartDatasets[activeTab];

  return (
    <section id="hero" className="section" style={{ minHeight: '94vh', display: 'flex', alignItems: 'center', paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div 
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.08fr 0.92fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Personal Introduction & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            
            {/* Availability Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
              <div className="badge badge-status-online" style={{ padding: '0.4rem 0.9rem', fontSize: '0.82rem' }}>
                <span className="status-dot-pulse" />
                <span>{personalData.availability.status}</span>
              </div>
            </div>

            {/* Main Greeting & Headings */}
            <div>
              <div 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.92rem', 
                  color: 'var(--color-accent-cyan)', 
                  fontWeight: 600, 
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{personalData.greeting}</span>
              </div>

              <h1 
                style={{ 
                  fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', 
                  fontWeight: 800, 
                  letterSpacing: '-0.025em',
                  lineHeight: 1.15,
                  marginBottom: '0.6rem'
                }}
              >
                {personalData.role}
              </h1>

              <div 
                style={{ 
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', 
                  fontWeight: 700, 
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1rem'
                }}
              >
                "{personalData.tagline}"
              </div>
            </div>

            {/* Friendly introduction paragraph */}
            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: 'var(--color-text-secondary)', 
                lineHeight: 1.75,
                maxWidth: '560px'
              }}
            >
              {personalData.introduction}
            </p>

            {/* Academic & Location Quick Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <span className="tech-tag" style={{ color: 'var(--color-text-primary)' }}>
                🎓 {personalData.educationSummary.degree}
              </span>
              <span className="tech-tag" style={{ color: 'var(--color-accent-cyan)' }}>
                📚 {personalData.educationSummary.current}
              </span>
              <span className="tech-tag" style={{ color: 'var(--color-text-secondary)' }}>
                📍 {personalData.location.city}, India
              </span>
            </div>

            {/* Three Required Action Buttons */}
            <div className="hero-buttons-group" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <button 
                onClick={() => scrollTo('projects')} 
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.6rem' }}
              >
                <span>Explore My Work</span>
                <ArrowRight size={17} />
              </button>

              <button 
                onClick={() => scrollTo('skills')} 
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.4rem' }}
              >
                <Layers size={17} className="text-cyan-400" />
                <span>My Skills</span>
              </button>

              <button 
                onClick={() => scrollTo('contact')} 
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.4rem' }}
              >
                <span>Get In Touch</span>
              </button>
            </div>

          </div>

          {/* Right Column: Animated Data Dashboard Visual + Avatar Card */}
          <div className="hero-visual-col" style={{ position: 'relative' }}>

            {/* Background glowing halo */}
            <div 
              style={{
                position: 'absolute',
                top: '5%',
                right: '5%',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Main Interactive Dashboard Panel */}
            <div 
              className="glass-card" 
              style={{
                padding: '1.75rem',
                position: 'relative',
                zIndex: 1,
                border: '1px solid var(--border-card)',
                boxShadow: 'var(--shadow-lg), 0 0 30px rgba(56, 189, 248, 0.12)',
              }}
            >
              
              {/* Header of the visual mockup */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', marginLeft: '0.4rem' }}>
                    analytics_board.sql
                  </span>
                </div>

                {/* Explicit DEMO DATA pill required by prompt */}
                <span className="badge badge-demo">
                  DEMO DATA
                </span>
              </div>

              {/* Profile Bar Inside Dashboard Visual */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-bg-surface)',
                  marginBottom: '1.25rem',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {/* Profile Avatar Placeholder with image fallback */}
                <div style={{ position: 'relative', width: '56px', height: '56px', flexShrink: 0 }}>
                  <img 
                    src="/avatar-placeholder.svg" 
                    alt="Kishore T - Profile Illustration" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      border: '2px solid var(--color-bg-surface)'
                    }} 
                    title="Active learner"
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-text-primary)' }}>
                      Kishore T
                    </div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-cyan)', fontWeight: 600 }}>
                      Live Preview
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                    BBA Graduate • Pursuing MBA • Nagapattinam
                  </div>
                </div>
              </div>

              {/* Interactive Tabs for the Demo Visual */}
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', background: 'var(--color-bg-base)', padding: '0.3rem', borderRadius: 'var(--radius-sm)' }}>
                <button
                  onClick={() => setActiveTab('overview')}
                  style={{
                    flex: 1,
                    padding: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    color: activeTab === 'overview' ? '#ffffff' : 'var(--color-text-secondary)',
                    backgroundColor: activeTab === 'overview' ? 'var(--color-accent-blue)' : 'transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  Quarterly Trend
                </button>
                <button
                  onClick={() => setActiveTab('category')}
                  style={{
                    flex: 1,
                    padding: '0.4rem',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    borderRadius: '6px',
                    color: activeTab === 'category' ? '#ffffff' : 'var(--color-text-secondary)',
                    backgroundColor: activeTab === 'category' ? 'var(--color-accent-blue)' : 'transparent',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  Category Split
                </button>
              </div>

              {/* Live Animated Chart Area (Pure Responsive SVG) */}
              <div style={{ background: 'var(--color-bg-base)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {currentDataset.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                      {currentDataset.subtitle}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>
                    <TrendingUp size={14} />
                    <span>Live Simulation</span>
                  </div>
                </div>

                {/* SVG Bar Chart Visualization */}
                <div style={{ height: '110px', display: 'flex', alignItems: 'flex-end', gap: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  {currentDataset.bars.map((bar, i) => (
                    <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', height: '100%' }}>
                      <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <div 
                          style={{
                            width: '28px',
                            height: `${bar.value}%`,
                            backgroundColor: bar.color,
                            borderRadius: '4px 4px 0 0',
                            transition: 'height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            boxShadow: `0 0 12px ${bar.color}40`,
                            position: 'relative'
                          }}
                          title={`${bar.label}: ${bar.value}%`}
                        />
                      </div>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                        {bar.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simulated Sparkline / Metrics Footnote */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.85rem' }}>
                  <div style={{ background: 'var(--color-bg-surface)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{currentDataset.kpi1.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-accent-cyan)' }}>{currentDataset.kpi1.val}</div>
                  </div>
                  <div style={{ background: 'var(--color-bg-surface)', padding: '0.5rem 0.75rem', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{currentDataset.kpi2.label}</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#10b981' }}>{currentDataset.kpi2.val}</div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Stack Badges around the visual */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Tools Practiced:
                </span>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div title="Microsoft Excel" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'default' }}>
                    <TechIcon name="excel" size={16} />
                    <span>Excel</span>
                  </div>
                  <div title="Power BI" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'default' }}>
                    <TechIcon name="powerbi" size={16} />
                    <span>Power BI</span>
                  </div>
                  <div title="MySQL" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'default' }}>
                    <TechIcon name="mysql" size={16} />
                    <span>MySQL</span>
                  </div>
                  <div title="Python" className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'default' }}>
                    <TechIcon name="python" size={16} />
                    <span>Python</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating KPI Accent Bubble 1 (Top Left) */}
            <div 
              className="animate-float glass-card"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                padding: '0.65rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-cyan)' }}>
                <Database size={15} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Relational Queries</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>MySQL Joins</div>
              </div>
            </div>

            {/* Floating KPI Accent Bubble 2 (Bottom Right) */}
            <div 
              className="animate-float-delayed glass-card"
              style={{
                position: 'absolute',
                bottom: '-15px',
                right: '-15px',
                padding: '0.65rem 0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                boxShadow: 'var(--shadow-md)',
                zIndex: 2,
              }}
            >
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                <CheckCircle size={15} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Status</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#10b981' }}>Ready to Contribute</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
