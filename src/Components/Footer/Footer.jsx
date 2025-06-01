import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="compny">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel.
            Repudiandae, ab sit expedita quos quis officia autem ratione ex
            tenetur nemo assumenda minima quo doloribus, consequuntur odit
            commodi voluptates. Voluptate in suscipit adipisci repudiandae
            distinctio quasi quis eligendi neque temporibus tempora.
          </p>
        </div>
        <div className="links">
          <h2>Quick Links</h2>
          <a href="#home">
            <i class="fas fa-chevron-circle-right"></i> home
          </a>
          <a href="#about">
            <i class="fas fa-chevron-circle-right"></i> about
          </a>
          <a href="#skills">
            <i class="fas fa-chevron-circle-right"></i> skills
          </a>
          <a href="#education">
            <i class="fas fa-chevron-circle-right"></i> education
          </a>
          <a href="#work">
            <i class="fas fa-chevron-circle-right"></i> work
          </a>
          <a href="#experience">
            <i class="fas fa-chevron-circle-right"></i> experience
          </a>
        </div>
        <div className="services">
             <h2>Services</h2>
        <a href="#home">
             Custom Software Development
          </a>
          <a href="#home">
             Web Application Development
          </a>
          <a href="#about">
             MERN Stack Development
          </a>
          <a href="#skills">
             Data Science
          </a>
          <a href="#education">
             Data Vizulisation
          </a>
          <a href="#work">
             Machine Learning
          </a>
          <a href="#experience">
             Deep Learning
          </a>
          <a href="#experience">
             Artificial Intelligence
          </a>
          <a href="#experience">
             Natural Language Processing
          </a>
          <a href="#home">
             Support & Maintenance
          </a>
        </div>
        <div className="techno">  <h2>Services</h2>
        <div className="part1"><a href="#home">
             Custom Software Development
          </a>
          <a href="#home">
             Web Application Development
          </a>
          <a href="#about">
             MERN Stack Development
          </a>
          <a href="#skills">
             Data Science
          </a>
          <a href="#education">
             Data Vizulisation
          </a>
          <a href="#work">
             Machine Learning
          </a>
          <a href="#experience">
             Deep Learning
          </a>
          <a href="#experience">
             Artificial Intelligence
          </a>
          <a href="#experience">
             Natural Language Processing
          </a>
          <a href="#home">
             Support & Maintenance
          </a></div>
        <div className="part2">
            <a href="#home">
             Custom Software Development
          </a>
          <a href="#home">
             Web Application Development
          </a>
          <a href="#about">
             MERN Stack Development
          </a>
          <a href="#skills">
             Data Science
          </a>
          <a href="#education">
             Data Vizulisation
          </a>
          <a href="#work">
             Machine Learning
          </a>
          <a href="#experience">
             Deep Learning
          </a>
          <a href="#experience">
             Artificial Intelligence
          </a>
          <a href="#experience">
             Natural Language Processing
          </a>
          <a href="#home">
             Support & Maintenance
          </a>
        </div>
        </div>
        <div className="contactinfo">e</div>
      </div>
    </>
  );
}

export default Footer;
