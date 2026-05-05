import React, { useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import { webDevSkills, shopifySkills } from '../data/skillsData';
import { profileData } from '../data/profileData';
import '../styles/skills.css';

const Skills = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Skills`;
  }, []);

  return (
    <div className="skills-page container animate-fade-in">
      <h2 className="section-title animate-fade-in animate-delay-1">My <span>Skills</span></h2>
      
      <div className="skills-section animate-fade-in animate-delay-2" style={{ marginBottom: '3rem' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>Web Development</h3>
        <div className="skills-grid">
          {webDevSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      <div className="skills-section animate-fade-in animate-delay-3">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--text-color)' }}>Shopify & E-Commerce</h3>
        <div className="skills-grid">
          {shopifySkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
