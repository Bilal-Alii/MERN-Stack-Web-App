import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/AboutPage.css';

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to Accessory Shop, your number one source for all things mobile accessories. We're dedicated to providing you the very best of mobile accessories, with an emphasis on quality, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2024, Accessory Shop has come a long way from its beginnings. When we first started out, our passion for providing the best equipment for our fellow tech enthusiasts drove us to start our own business.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p>Sincerely,<br/>Accessory Shop Team</p>

        <div className="contact-icons">
          <a href="tel:+1234567890" className="contact-link">
            <FontAwesomeIcon icon={faPhone} /> +1 (234) 567-890
          </a>
          <a href="mailto:info@accessoryshop.com" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} /> info@accessoryshop.com
          </a>
          <a href="https://www.facebook.com/accessoryshop" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Mobile Accessories
          </a>
          <a href="https://www.instagram.com/accessoryshop" className="contact-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Mob Accessory Shop
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
