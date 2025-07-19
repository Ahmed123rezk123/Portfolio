import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <section className="footer">
      <h3>AhmedAtef</h3>
      <ul className="list-footer">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="socail-footer">
        <li className="icon-footer">
          <a href="https://github.com/Ahmed123rezk123" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className="icon-footer">
          <a
            href="https://www.linkedin.com/in/ahmed-atef-647898247/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="icon-footer">
          <a
            href="https://api.whatsapp.com/send?phone=01286704665"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
        </li>
      </ul>
      <p>
        &copy;2025 <span>AhmedAtef</span> All rights reserved
      </p>
    </section>
  );
}

export default Footer;
