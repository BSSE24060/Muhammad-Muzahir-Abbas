import React, { useEffect } from 'react';
import { experienceData } from '../data/experienceData';
import { profileData } from '../data/profileData';
import '../styles/experience.css';

const Experience = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Experience`;
  }, []);

  return (
    <div className="experience-page container animate-fade-in">
      <h2 className="section-title animate-fade-in animate-delay-1">My <span>Experience</span></h2>
      <p className="skills-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>A timeline of my professional journey.</p>
      
      <div className="timeline animate-fade-in animate-delay-2">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={item.id} style={{ animationDelay: `${0.2 + index * 0.2}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-role">{item.role}</h3>
              <h4 className="timeline-company">{item.company}</h4>
              <div className="timeline-meta">
                <span className="timeline-duration">{item.duration}</span>
                <span className="timeline-type">{item.type}</span>
              </div>
              <p className="timeline-description" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
