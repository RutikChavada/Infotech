import React from "react";
import "./Footer.css";
import logo from "../../assets/logo2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faSquareTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="compny">
                    {/* <img src={logo} alt="" /> */}
                    <h1>Compny Logo</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vel.
                        Repudiandae, ab sit expedita quos quis officia autem ratione ex
                        {/* tenetur nemo assumenda minima quo doloribus, consequuntur odit
                        commodi voluptates. Voluptate in suscipit adipisci repudiandae
                        distinctio quasi quis eligendi neque temporibus tempora. */}
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
                    <a href="#home">Custom Software Development</a>
                    <a href="#home">Web Application Development</a>
                    <a href="#about">MERN Stack Development</a>
                    <a href="#skills">Data Science</a>
                    <a href="#education">Data Vizulisation</a>
                    <a href="#work">Machine Learning</a>
                    <a href="#experience">Deep Learning</a>
                    <a href="#experience">Artificial Intelligence</a>
                    <a href="#experience">Natural Language Processing</a>
                    <a href="#home">Support & Maintenance</a>
                </div>
                <div className="techno">
                    <h2>Technologies</h2>
                    <div className="techno1">
                        <div className="part1">
                            <a href="#home">UI/UX</a>
                            <a href="#home">React Js</a>
                            <a href="#about">Tailwind</a>
                            <a href="#skills">My SQL</a>
                            <a href="#education">MongoDB</a>
                            <a href="#work">MERN Stack</a>
                            <a href="#experience">Figma</a>
                            <a href="#experience">Canva</a>
                            <a href="#experience">Flask</a>
                            <a href="#home">Next Js</a>
                        </div>
                        <div className="part2">
                            <a href="#home">Machine Learning</a>
                            <a href="#home">Python</a>
                            <a href="#about">Numpy</a>
                            <a href="#skills">Data Science</a>
                            <a href="#education">Pandas</a>
                            <a href="#work">Scikit Learn</a>
                            <a href="#experience">Tensorflow</a>
                            <a href="#experience">NLTK</a>
                            <a href="#experience">Natural Language Processing</a>
                            <a href="#home">Seaborn</a>
                        </div>
                    </div>
                </div>
                <div className="contactinfo">
                    <h2>Contact Us</h2>
                    <p>
                        📧 Email :{" "}
                        <a href="mailto:rutik@example.com" style={{ color: "#007bff", textDecoration: "none" }}>
                            rutik@example.com
                        </a>
                    </p>
                    <p>
                        📞 Mobile:{" "}
                        <a href="tel:+919876543210" style={{ color: "#007bff", textDecoration: "none" }}>
                            +91 98765 43210
                        </a>
                    </p>
                    <p>
                        📍 Address : Surat, Gujrat, India.
                    </p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faSquareTwitter} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
