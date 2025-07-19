import React from "react";
import "./projects.css";

import IMG1 from "../../assets/img-2.jpg";
import IMG2 from "../../assets/popcorn.png";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/reactapp.png";
import IMG6 from "../../assets/weather.png";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "WorldWise",
    github: "https://github.com/Ahmed123rezk123/WorldWise",
    demo: "https://world-wise-omega-three.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "PopCorn",
    github: "https://github.com/Ahmed123rezk123/usePopcorn-",
    demo: "https://use-popcorn-seven-sigma.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ReactQuiz",
    github: "https://github.com/Ahmed123rezk123/React-Quiz",
    demo: "https://react-quiz-ecru.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Movie",
    github: "https://github.com/Ahmed123rezk123/Movie",
    demo: "https://movie-3lm7j4fa9-ahmedatefs-projects-30f4ea5b.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "ReactApp",
    github: "https://github.com/Ahmed123rezk123/my-react-app",
    demo: "https://my-react-app-rho-coral.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather",
    github: "https://github.com/Ahmed123rezk123/Weather",
    demo: "https://weather-nine-omega-70.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top_section">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
      </div>
      <div className="container container_projects">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <div className="card_project" key={id}>
            <div className="image">
              <img src={image} alt="" height="250px" />
            </div>
            <h3>{title}</h3>
            <div className="btns-projects">
              <a href={github} target="_blank" className="btn">
                Github
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
