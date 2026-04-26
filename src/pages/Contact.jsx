import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { profileData } from '../data/profileData';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  useEffect(() => {
    document.title = `${profileData.name} | Contact`;
  }, []);

  return (
    <div className="contact-page container fade-in">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's talk about everything!</h3>
          <p>Feel free to reach out for collaborations, freelance projects, or just to say hi.</p>
          
          <div className="info-items">
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>{profileData.email}</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>{profileData.phone}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
