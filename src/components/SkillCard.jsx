import React from 'react';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-name">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
