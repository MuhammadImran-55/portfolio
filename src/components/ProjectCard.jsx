import React from "react";
import "./ProjectCard.css";
import img1 from '../assets/img/uni-portal.png'
import img2 from '../assets/img/course-learning.png'
import img3 from '../assets/img/ecom.png'
import img4 from '../assets/img/css-1.png'
import img5 from '../assets/img/css-2.png'
import img6 from '../assets/img/css-3.png'

const ProjectCard = () => {
   const projects = [
    {
      title: "University Portal",
      desc: "Full-featured MERN app with auth, middleware & dashboard.",
      img: img1,
      tech: "React • Node • MongoDB",
    },
    {
      title: "course Enrollment system",
      desc: "Well trained teacher and best course on the planet.",
      img: img2,
      tech: "React • tailwind • framer-motion",
    },
    {
      title: "E-commerce Website",
      desc: "Modern & clean e-commerce site.",
      img: img3,
      tech: "HTML • CSS • JavaScript",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio with clean UI/UX.",
      img: img4,
      tech: "React • CSS • Framer",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio with clean UI/UX.",
      img: img5,
      tech: "React • CSS • Framer",
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio with clean UI/UX.",
      img: img6,
      tech: "React • CSS • Framer",
    },
  ];

  return (
    <div className="project-container">
      {projects.map((proj, i) => (
        <div className="card" key={i}>
          
          <img src={proj.img} className="card-img" alt="" />

          {/* dark overlay */}
          <div className="overlay-dark"></div>

          {/* title */}
          <div className="card-title">
            <h2>{proj.title}</h2>
          </div>

          {/* hover overlay */}
          <div className="overlay-blue">
            <h2>{proj.title}</h2>
            <p>{proj.desc}</p>
            <span>{proj.tech}</span>

            <div className="btns">
              <button className="btn-white">Live</button>
              <button className="btn-outline">Code</button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ProjectCard;