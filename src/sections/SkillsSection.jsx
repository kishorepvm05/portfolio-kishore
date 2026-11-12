import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { TechIcon } from '../components/TechIcon';
import { TiltCard } from '../components/TiltCard';

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-wrapper" aria-label="Skills and Core Stack">
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
            02 / Competencies
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Analytical <span className="serif-italic">Tooling</span> &amp; Capabilities
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Core analytical tools and technical competencies developed through rigorous project-based execution.
          </motion.p>
        </div>

        {/* 4 Editorial Skill Cards with Interactive 3D Tilt */}
        <div className="skills-editorial-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard className="skill-editorial-card">
                <div className="skill-icon-wrap">
                  <TechIcon name={skill.name} size={28} />
                </div>

                <h3 className="skill-title-name">
                  {skill.name}
                </h3>

                <p className="skill-desc-text">
                  {skill.shortDescription}
                </p>

                <div className="skill-pills-row">
                  {skill.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="skill-sub-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
