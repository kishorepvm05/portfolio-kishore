import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';
import { TechIcon } from '../components/TechIcon';

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-wrapper" aria-label="Skills and Core Stack">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-number">02 / Competencies</span>
          <h2 className="section-title">
            Analytical <span className="serif-italic">Tooling</span> &amp; Capabilities
          </h2>
          <p className="section-subtitle">
            Core analytical tools and technical competencies developed through rigorous project-based execution.
          </p>
        </div>

        {/* 4 Editorial Skill Cards */}
        <div className="skills-editorial-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-editorial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
