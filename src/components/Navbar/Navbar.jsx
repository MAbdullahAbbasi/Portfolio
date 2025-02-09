import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Navbar/Navbar.css';
import cv from '../../files/MAbdullahAbbasiCV.pdf';

const Navbar = ({ scrollToSection, heroRef, worksRef, educationRef, skillsRef }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);

    if (link === 'Home') scrollToSection(heroRef);
    if (link === 'My Work') scrollToSection(worksRef);
    if (link === 'About Me') scrollToSection(educationRef);
    if (link === 'My Skills') scrollToSection(skillsRef);
  };

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <nav className="navbar">
        <h1 className="navbar-logo">Portfolio</h1>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Sliding Menu */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {['Home', 'My Work', 'About Me', 'My Skills', 'Download CV'].map((link) => (
            <li key={link} className="navbar-item">
              {link === 'Download CV' ? (
                <a href={cv} download="MAbdullahAbbasiCV.pdf" className="navbar-link cv-link">
                  {link}
                </a>
              ) : (
                <span
                  onClick={() => handleLinkClick(link)}
                  className={`navbar-link ${activeLink === link ? 'active' : ''}`}
                >
                  {link}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
