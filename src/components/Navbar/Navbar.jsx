import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styling/Navbar/Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home'); // Set default active link to 'Home'
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <>
      {/* Blur Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <nav className="navbar">
        <h1 className="navbar-logo">Portfolio</h1>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>

        {/* Sliding Menu */}
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {['Home', 'My Work', 'About Me', 'Contact Me', 'Download CV'].map((link) => (
            <li key={link} className="navbar-item">
              <Link
                to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(link)}
                className={`navbar-link ${activeLink === link ? 'active' : ''}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
