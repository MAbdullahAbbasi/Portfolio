import React from 'react';
import '../../styling/Education/Education.css';

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">Software Engineer</h2>

      <div className="education-card">
        <div className="degree-header">
          <h3 className="degree-title">Bachelor's Degree in Software Engineering</h3>
          <p className="institution">Bahria University, Islamabad Campus</p>
        </div>
        <p className="graduation-year">Graduated: 2024</p>
        <p className="degree-description">
          I completed my Bachelor's in Software Engineering at Bahria University, Islamabad. The program provided me with a strong foundation in software development, including key areas like programming, data structures, databases, algorithms, and web development.
        </p>
      </div>
    </div>
  );
};

export default Education;
