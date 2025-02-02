import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styling/Works/Works.css";
import reallinkImg from "../../assets/realestate.jpeg";
import recruitmentImg from "../../assets/recruit.jpg";
import autolms from "../../assets/autolms.jpg";
import attendance from "../../assets/attendance.jpeg";

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    { img: reallinkImg, title: "RealLink - A real estate website", link: "/reallink" },
    { img: recruitmentImg, title: "Recruitment System", link: "/recruitment" },
    { img: autolms, title: "AutoLMS", link: "/autolms" },
    { img: attendance, title: "Attendance Management System", link: "/ams" },
  ];

  return (
    <div className="works-container">
      <h1 className="works-title">My Works</h1>
      <div className="works-grid">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={index}
            className={`work-item ${hoveredIndex === index ? "hovered" : hoveredIndex !== null ? "shrunk" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img src={project.img} alt={project.title} className="work-image" />
              <div className="overlay">
                <p className="work-text">{project.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;
