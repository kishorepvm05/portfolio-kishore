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
        <div className="section-header-agency">
          <span className="section-number-tag">02 / Technical Domains</span>
          <h2 className="section-title-agency">
            Analytical <span className="serif-italic">Tooling</span> &amp; Precision
          </h2>
          <p className="section-lead-agency">
            Structured querying, automated data staging, and visual intelligence platforms mastered through continuous project practice.
          </p>
        </div>

        {/* 4 Interactive Skill Cards Grid */}
        <div className="skills-agency-grid">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard className="skill-agency-card">
                <div className="skill-icon-bubble">
                  <TechIcon name={skill.name} size={30} />
                </div>

                <h3 className="skill-card-name">
                  {skill.name}
                </h3>

                <p className="skill-card-summary">
                  {skill.shortDescription}
                </p>

                <div className="skill-tags-flex">
                  {skill.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="skill-micro-badge">
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
