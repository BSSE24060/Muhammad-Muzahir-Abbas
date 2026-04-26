import React, { useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';
import { profileData } from '../data/profileData';
import '../styles/skills.css';

const Skills = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Skills`;
  }, []);

  return (
    <div className="skills-page container fade-in">
      <h2 className="section-title">My <span>Skills</span></h2>
      <p className="skills-subtitle">Here are some of the technologies I work with.</p>
      
      <div className="skills-grid">
        {skillsData.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
