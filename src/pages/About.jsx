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
    <div className="about-page container animate-fade-in">
      <h2 className="section-title animate-fade-in animate-delay-1">About <span>Me</span></h2>
      <div className="about-content animate-fade-in animate-delay-2" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div className="about-image" style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="/profile.jpg" 
            alt={profileData.name} 
            style={{ width: '100%', borderRadius: '12px', border: '2px solid var(--border-color)', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }} 
          />
        </div>
        <div className="about-text" style={{ flex: '2', minWidth: '300px' }}>
          <h3>Professional Summary</h3>
          <p>
            I am a dedicated <strong>Software Engineer and Shopify Expert</strong> based in <strong>Lahore, Pakistan</strong>. 
            My journey into tech started with a profound interest in solving complex problems and creating seamless user experiences.
          </p>
          <p>
            Currently, I am pursuing my Bachelor of Science in Software Engineering at <strong>Information Technology University, Lahore</strong>. 
            Alongside my studies, I work at <strong>Planlab Solutions</strong> and collaborate with independent clients globally, delivering top-tier web development and e-commerce solutions.
          </p>
          
          {showMore && (
            <div className="more-content slide-down" style={{ marginTop: '1rem' }}>
              <h3>My Focus</h3>
              <p>I specialize in modern React.js applications, building robust backend infrastructures, and executing end-to-end Shopify store setups with custom designs and Client-Side Rendering (CSR).</p>
            </div>
          )}
          
          <button className="toggle-btn" onClick={toggleShowMore} style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', backgroundColor: 'var(--primary-color)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
