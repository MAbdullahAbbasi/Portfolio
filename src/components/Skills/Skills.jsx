import React, { useState } from "react";
import "../../styling/Skills/Skills.css";

const skillsData = {
  "Programming Languages": ["JavaScript", "Python", "C++", "C", "C#"],
  "Web Development Frameworks": ["React (JavaScript)", "Bootstrap", "ExpressJS", "Flask"],
  "Desktop Development Frameworks": [".NET"],
  "Database": ["SQLServer", "MongoDB"],
  "Version Control": ["Git", "GitHub"],
  "Tools and Technologies": ["VS Code", "Visual Studio", "NetBeans", "SSMS", "Visual Paradigm", "Canva", "Office365"],
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState("Programming Languages");

  return (
    <div className="skills-container">
      {/* Large heading aligned left */}
      <h2 className="skills-title">Skills</h2>

      {/* Skills Layout - Side by Side */}
      <div className="skills-wrapper">
        {/* Skill Categories (Left Side) */}
        <div className="skills-sidebar">
          {Object.keys(skillsData).map((skill) => (
            <button
              key={skill}
              className={`skill-category ${activeSkill === skill ? "active" : ""}`}
              onClick={() => setActiveSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Subskills (Right Side in Column) */}
        <div className="subskills-container">
          <ul className="subskills-list">
            {skillsData[activeSkill].map((subskill, index) => (
              <li key={index} className="subskill">{subskill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
