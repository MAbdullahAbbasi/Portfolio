import React from 'react';
import '../../styling/Hero/Hero.css';
import abdullahImage from '../../assets/me.png';
import cv from '../../files/MAbdullahAbbasiCV.pdf';

const Hero = () => {
  return (

    <section className="hero">
 
      <div className="hero-content">

        <div className="hero-text">
          <h1>Hi, I'm Abdullah</h1>
          <p>A passionate Software Engineer <br /> & <br /> Web Developer</p>
          <div className="hero-buttons">
            <a href={cv} download="MAbdullahAbbasiCV.pdf" className="btn">Download CV</a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=engineerabdullah020@gmail.com&su=Let's%20Connect&body=Hi%20Abdullah,%20I%20would%20like%20to%20discuss%20something%20with%20you." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Contact Me
            </a>


          </div>
        </div>

        <div className="hero-image">
          <img src={abdullahImage} alt="Abdullah" />
        </div>

      </div>

    </section>
    
  );
};

export default Hero;
