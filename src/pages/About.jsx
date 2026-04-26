import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profileData';
import '../styles/about.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    document.title = `${profileData.name} | About`;
  }, []);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="about-page container fade-in">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-content">
        <div className="about-text">
          <h3>My Background</h3>
          <p>
            I am a dedicated software developer with a passion for creating elegant, intuitive, and highly functional web applications. 
            My journey into tech started when I realized the power of code to solve real-world problems and enhance user experiences.
          </p>
          
          {showMore && (
            <div className="more-content slide-down">
              <h3>Education</h3>
              <p>Bachelor of Science in Computer Science, University of Technology.</p>
              
              <h3>Career Goals</h3>
              <p>My goal is to continue growing as a full-stack developer, contributing to impactful open-source projects, and eventually leading a team of talented engineers to build innovative tech solutions.</p>
              
              <h3>Hobbies</h3>
              <p>When I'm not coding, you can find me hiking local trails, experimenting with new cooking recipes, or playing strategy board games with friends.</p>
            </div>
          )}
          
          <button className="toggle-btn" onClick={toggleShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
