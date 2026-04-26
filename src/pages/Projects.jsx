import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import { profileData } from '../data/profileData';
import '../styles/projects.css';

const Projects = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Projects`;
  }, []);

  return (
    <div className="projects-page container fade-in">
      <h2 className="section-title">My <span>Projects</span></h2>
      <p className="projects-subtitle">A selection of my recent work.</p>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
