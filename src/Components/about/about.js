import React from "react";
import "./about.css";
import AboutImage from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about-me">
          <div className="image">
            <img src={AboutImage} alt="Ahmed Atef" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiece</h5>
              <span>2+ years Working</span>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <span>20+ Worldwide</span>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <span>25+ Completed</span>
            </div>
          </div>
          <p>
            I am a dedicated Computer Science student with a solid foundation in
            algorithms, data structures, and problem-solving. I have actively
            participated in competitive programming, including the International
            Collegiate Programming Contest (ICPC), where I have honed my skills
            in tackling complex problems under time constraints. My passion for
            coding drives me to continuously improve and expand my knowledge in
            the field. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
