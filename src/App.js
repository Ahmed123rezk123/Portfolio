import React from "react";
import Home from "./Components/home/home.js";
import Nav from "./Components/nav/nav.js";
import About from "./Components/about/about.js";
import Skills from "./Components/skills/skills.js";
import Projects from "./Components/projects/projects.js";
import Services from "./Components/services/services.js";
import Contact from "./Components/contact/contact.js";
import Footer from "./Components/footer/footer.js";
import Meteors from "./Components/meteors/meteors.js";

function App() {
  return (
    <>
      <Meteors count={10} />
      <Home />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
