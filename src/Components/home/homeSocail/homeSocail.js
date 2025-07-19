import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function HomeSocail() {
  return (
    <div className="home_socail">
      <a
        href="https://www.linkedin.com/in/ahmed-atef-647898247/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/Ahmed123rezk123" target="_blank">
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
}

export default HomeSocail;
