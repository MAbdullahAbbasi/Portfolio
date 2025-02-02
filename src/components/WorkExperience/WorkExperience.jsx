import React from 'react';
import '../../styling/WorkExperience/WorkExperience.css';

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h2 className="work-title">Work Experience</h2>

      {/* Web Developer Experience */}
      <div className="work-section">
        <h3 className="section-title">Web Developer - ERP/Software at Bahria Town, Rawalpindi</h3>
        <p className="section-text">
          As a <span className="highlight">Web Developer</span> at <span className="highlight">Bahria Town</span>, I worked with the <span className="highlight">MERN Stack</span> to develop a complete recruitment system. <br /> My responsibilities included:
        </p>
        <ul className="experience-list">
          <li>Developing a recruitment system for efficient hiring processes.</li>
          <li>Building and managing RESTful APIs using Node.js and Express.</li>
          <li>Implementing authentication and user role management with JWT.</li>
          <li>Optimizing database queries using MongoDB for better performance.</li>
        </ul>
        <p className="project-link">
          Project: <a href="https://your-recruitment-project-link.com" target="_blank" rel="noopener noreferrer">
            Recruitment System
          </a>
        </p>
      </div>

      {/* Frontend Developer Experience */}
      <div className="work-section">
        <h3 className="section-title">Frontend Developer - UCapacity</h3>
        <p className="section-text">
          At <span className="highlight">UCapacity</span>, I worked as a <span className="highlight">Frontend Developer</span>, where I converted a Figma design into a fully functional real estate website named <span className="highlight">RealLink</span>. <br /> My key tasks included:
        </p>
        <ul className="experience-list">
          <li>Translating Figma designs into high-quality, responsive React components.</li>
          <li>Ensuring cross-browser compatibility and mobile responsiveness.</li>
          <li>Optimizing frontend performance for better user experience.</li>
          <li>Collaborating with backend developers to integrate APIs smoothly.</li>
        </ul>
        <p className="project-link">
          Project: <a href="https://your-reallink-project.com" target="_blank" rel="noopener noreferrer">
            RealLink - Real Estate Website
          </a>
        </p>
      </div>
    </div>
  );
};

export default WorkExperience;
