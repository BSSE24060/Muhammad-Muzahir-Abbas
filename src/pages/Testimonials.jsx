import React, { useEffect } from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { profileData } from '../data/profileData';
import '../styles/testimonials.css';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Testimonials = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Testimonials`;
  }, []);

  return (
    <div className="testimonials-page container animate-fade-in">
      <h2 className="section-title animate-fade-in animate-delay-1">Client <span>Testimonials</span></h2>
      <p className="skills-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>What people say about my work.</p>
      
      <div className="testimonials-grid animate-fade-in animate-delay-2">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>{testimonial.clientName}</h4>
                <p>{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
