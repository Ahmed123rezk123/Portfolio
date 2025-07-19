import React from "react";
import "./skills.css";

// import { BsPatchCheckFill } from "react-icons/bs";
import Css from "../../assets/css3.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import ReactQuery from "../../assets/react-query-seeklogo.svg";
import Redux from "../../assets/redux-logo-png_seeklogo-284335.png";
import Git from "../../assets/git-logo-png_seeklogo-273180.png";

const SkillsData = [
  {
    id: 1,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 2,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 3,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 4,
    image: Tailwind,
    title: "TailwindCSS",
    disc: "User Interface",
  },
  {
    id: 5,
    image: ReactQuery,
    title: "ReactQuery",
    disc: "Data Fetching",
  },
  {
    id: 6,
    image: Figma,
    title: "Figma",
    disc: "Design tool",
  },
  {
    id: 7,
    image: Redux,
    title: "Redux",
    disc: "state management",
  },
  {
    id: 8,
    image: Git,
    title: "Git",
    disc: "Version Control",
  },
];
function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container container_skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <div className="card_skill" key={id}>
            <div className="icon">
              <img src={image} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
