import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faSquareTwitter,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToAbout = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="bottomside">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
                            <li className="dropdown">
                                <a href="#">Services</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Web Development</a></li>
                                    <li><a href="#">Mobile App Development</a></li>
                                    <li><a href="#">UI/UX Design</a></li>
                                    <li><a href="#">Cloud Solutions</a></li>
                                    <li><a href="#">IT Consulting</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Technologies</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#about" onClick={scrollToAbout}>About</a></li>
                            <li><a id="contact" href="#">Contact</a></li>
                        </ul>
                    </div>
                    {/* <div className="icons">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faSquareTwitter} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div> */}
                </div>
            </div>
             <div className="outlet"> {/* Adjust top margin to match navbar height */}
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;