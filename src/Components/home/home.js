import React, { useEffect, useState } from "react";
import "./home.css";
import MyImage from "../../assets/myImage.jpg";
import CV from "../../assets/AhmedAtef-CV.pdf";
import HomeSocail from "./homeSocail/homeSocail";

// Typewriter component for animated name
const Typewriter = () => {
  const text = "Ahmed Atef";
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.substring(0, index + 1));
        setIndex(index + 1);
      }, 150);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.substring(0, index - 1));
        setIndex(index - 1);
      }, 100);
    } else if (index === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && index === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <span
      style={{
        fontWeight: "medium",
        fontSize: "2rem",
        fontFamily: "Poppins, serif",
      }}
    >
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
};

function Home() {
  return (
    <section className="home" id="home">
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>
          <Typewriter />
        </h1>
        <h4 className="text-light">Frontend Developer</h4>
        <div className="btns">
          <a href={CV} className="btn" download>
            DownLoad CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="my-image">
          <img src={MyImage} alt="Ahmed Atef" />
        </div>
        <a href="#about" className="scroll-down">
          Scroll Down
        </a>
        <HomeSocail />
      </div>
    </section>
  );
}

export default Home;
