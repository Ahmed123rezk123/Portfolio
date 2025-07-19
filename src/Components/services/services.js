import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <div className="card">
          <MdDesignServices className="icon" />
          <h4>Web Design</h4>
          <p className="text-light">
            I create visually stunning and user-friendly websites tailored to
            your brand and audience. My designs focus on modern aesthetics.
          </p>
        </div>
        <div className="card">
          <IoIosRocket className="icon" />
          <h4>Fast Performane</h4>
          <p className="text-light">
            I optimize every website for speed and efficiency, ensuring quick
            load times and smooth interactions. By using best practices and the
            latest technologies.
          </p>
        </div>

        <div className="card">
          <FaCode className="icon" />
          <h4>Clean Code</h4>
          <p className="text-light">
            I write clean, well-structured, and maintainable code following
            industry standards. My approach ensures your website is reliable,
            scalable
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

/*
<div className="card">
          <MdDesignServices className="icon" />
          <h4>Web Design</h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            quis dolorem modi facilis a ratione vitae suscipit sed nisi, fuga
            illum in! Aperiam modi debitis, distinctio unde illum eaque quis.
          </p>
        </div>
        <div className="card">
          <IoIosRocket className="icon" />
          <h4>Fast Performane</h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            quis dolorem modi facilis a ratione vitae suscipit sed nisi, fuga
            illum in! Aperiam modi debitis, distinctio unde illum eaque quis.
          </p>
        </div>

        <div className="card">
          <FaCode className="icon" />
          <h4>Clean Code</h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            quis dolorem modi facilis a ratione vitae suscipit sed nisi, fuga
            illum in! Aperiam modi debitis, distinctio unde illum eaque quis.
          </p>
        </div>

*/
