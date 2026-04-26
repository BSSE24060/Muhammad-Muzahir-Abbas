import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/home.css';

const HeroSection = ({ name, title, bio }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{name}</span>
        </h1>
        <h2 className="hero-subtitle">{title}</h2>
        <p className="hero-bio">{bio}</p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="image-wrapper">
          <img 
            src="/profile.jpg" 
            alt={name} 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
