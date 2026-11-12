import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  FileSpreadsheet, 
  Layers, 
  ArrowUpRight, 
  Activity, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar 
} from 'recharts';
import { TechIcon } from './TechIcon';

// Realistic sample analytics data
const performanceData = [
  { month: 'Jan', sales: 4200, orders: 120, conversion: 2.8 },
  { month: 'Feb', sales: 5300, orders: 145, conversion: 3.1 },
  { month: 'Mar', sales: 6100, orders: 168, conversion: 3.4 },
  { month: 'Apr', sales: 5800, orders: 155, conversion: 3.2 },
  { month: 'May', sales: 7400, orders: 198, conversion: 3.9 },
  { month: 'Jun', sales: 8900, orders: 240, conversion: 4.4 },
];

const categoryContribution = [
  { category: 'Tech', value: 45 },
  { category: 'Office', value: 25 },
  { category: 'Retail', value: 20 },
  { category: 'Others', value: 10 },
];

export const HeroDashboard = () => {
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <div className="hero-dashboard-container">
      {/* Outer Glow & Ambient Lighting */}
      <div 
        style={{
          position: 'absolute',
          inset: '-20px',
          background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25), rgba(59, 130, 246, 0.15), transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Main Glass Dashboard Card */}
      <motion.div 
        className="hero-dashboard-glass"
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Dashboard Header Bar */}
        <div className="dashboard-header">
          <div className="dashboard-header-title">
            <Activity size={18} className="text-cyan-400" style={{ color: 'var(--cyan)' }} />
            <span>Interactive Business Analytics Suite</span>
          </div>

          <div className="dashboard-status-tag">
            <span className="badge-tag-dot" />
            <span>LIVE PREVIEW • SAMPLE DATA</span>
          </div>
        </div>

        {/* 3 Interactive KPI Cards */}
        <div className="dashboard-kpi-grid">
          <div className="kpi-card-mini">
            <div className="kpi-title-mini">Total Revenue Analyzed</div>
            <div className="kpi-value-mini">$37.7K</div>
            <div className="kpi-change-mini positive">
              <TrendingUp size={12} />
              <span>+24.6% vs Target</span>
            </div>
          </div>

          <div className="kpi-card-mini">
            <div className="kpi-title-mini">Orders Processed</div>
            <div className="kpi-value-mini">1,026</div>
            <div className="kpi-change-mini neutral">
              <BarChart3 size={12} />
              <span>4 Clean Data Tables</span>
            </div>
          </div>

          <div className="kpi-card-mini">
            <div className="kpi-title-mini">Avg Profit Margin</div>
            <div className="kpi-value-mini">32.8%</div>
            <div className="kpi-change-mini positive">
              <Sparkles size={12} />
              <span>DAX Dynamic Model</span>
            </div>
          </div>
        </div>

        {/* Dynamic Chart Area with Recharts */}
        <div className="dashboard-chart-area">
          <div className="dashboard-chart-header">
            <div className="chart-title-label">
              Monthly Revenue Growth Trend
            </div>
            <span className="chart-sample-badge">Power BI / Excel Engine</span>
          </div>

          <div style={{ width: '100%', height: 160 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  stroke="var(--text-muted)" 
                  fontSize={11} 
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                />
                <YAxis 
                  stroke="var(--text-muted)" 
                  fontSize={11} 
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `$${val/1000}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(11, 17, 32, 0.95)', 
                    borderColor: 'rgba(6, 182, 212, 0.3)',
                    borderRadius: '8px',
                    fontSize: '12px',
                    color: '#F8FAFC'
                  }}
                  formatter={(val) => [`$${val.toLocaleString()}`, 'Revenue']}
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#06B6D4" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#cyanGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer Data Pipeline Strip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Database size={13} style={{ color: 'var(--cyan)' }} />
            <span>MySQL Schema &bull; Star Schema DAX</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)' }}>Latency: 12ms</span>
        </div>
      </motion.div>

      {/* Floating Satellite 1: Excel & Power BI Node */}
      <motion.div 
        className="floating-satellite floating-satellite-1"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      >
        <TechIcon name="Power BI" size={26} />
        <div className="satellite-text-group">
          <span className="satellite-label">BI Visuals</span>
          <span className="satellite-title">Dynamic KPI</span>
        </div>
      </motion.div>

      {/* Floating Satellite 2: SQL & Python Node */}
      <motion.div 
        className="floating-satellite floating-satellite-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
      >
        <TechIcon name="MySQL" size={26} />
        <div className="satellite-text-group">
          <span className="satellite-label">Queries</span>
          <span className="satellite-title">Relational Joins</span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroDashboard;

