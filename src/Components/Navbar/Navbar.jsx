import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faSquareTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    // Close menu on route change or window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuToggle = () => setMenuOpen(prev => !prev);
    const handleMenuClose = () => setMenuOpen(false);

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
                        <h1>Logo</h1>
                    </div>
                    <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                    <div className={`menu${menuOpen ? ' open' : ''}`}>
                        <ul onClick={handleMenuClose}>
                            <li><a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</a></li>
                            <li className="dropdown">
                                <a href="services">Services</a>
                            </li>
                            <li><a href="technologies">Technologies</a></li>
                            <li><a href="portfolio">Portfolio</a></li>
                            <li><a href="about">About</a></li>
                            <li><a id="contact" href="contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="outlet"> {/* Adjust top margin to match navbar height */}
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;