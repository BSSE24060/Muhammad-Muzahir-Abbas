import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { profileData } from '../data/profileData';
import '../styles/home.css';

const Home = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Home`;
  }, []);

  return (
    <div className="home-page fade-in">
      <HeroSection 
        name={profileData.name}
        title={profileData.title}
        bio={profileData.bio}
      />
    </div>
  );
};

export default Home;
