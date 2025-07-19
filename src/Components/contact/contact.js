import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "ahmed.rezk.ssd@gmail.com",
    link: "mailto:test@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "LinkedIn",
    info: "Ahmed Atef",
    link: "https://www.linkedin.com/in/ahmed-atef-profile/",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01286704665",
    link: "https://api.whatsapp.com/send?phone=01286704665",
  },
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pwyk5nb",
      "template_kynj5x2",
      form.current,
      "DgNPgItDTmngp-1H4"
    );
    e.target.reset();
  };
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container container_contact">
        <div className="cards_container">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <div className="card" key={id}>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </div>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail} className="content">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows={10}
            placeholder="Enter Your Message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
