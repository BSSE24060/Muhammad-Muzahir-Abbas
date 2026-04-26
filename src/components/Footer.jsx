import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-brand">
          <h3>{profileData.name}</h3>
          <p>{profileData.title}</p>
        </div>
        
        <div className="footer-social">
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href={`mailto:${profileData.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Muhammad Muzahir Abbas Building digital experience with domination and passion</p>
      </div>
    </footer>
  );
};

export default Footer;
