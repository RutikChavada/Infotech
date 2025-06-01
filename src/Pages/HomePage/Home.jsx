import React from "react";
import "./Home.css";
import Home_2 from "../Home_2/Home_2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 
import Home_3 from "../Home_3/Home_3";
import Home_4 from "../Home_4/Home_4";
import Home_5 from "../Page_5/Page_5";
import Home_6 from "../Home_6/Home_6";
import Footer from "../../Components/Footer/Footer";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="left">
                    <h1>Empowering Startups, SMEs & Enterprises with Digital Solutions Since 2025</h1>
                    <div className="mid_heading">
                        <p>Your Trusted Partner in Digital Transformation !</p>
                    </div>
                    <div className="list1">
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Business</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Education</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Healthcare</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>E-Commerce</h3>
                        </div>
                    </div>
                    <div className="list1">
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Retail & Shopping</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Entertainment & Media</h3>
                        </div>
                    </div>
                    
                    <div className="contact">
                        Contact
                    </div>
                </div>
                <div className="model-container">
                    <model-viewer
                        src="/models/model.glb"
                        alt="3D Model"
                        className="swing-rotation"
                        auto-rotate
                        disable-pan
                        shadow-intensity="1"
                        disable-zoom 
                        style={{ width: '900px', height: '600px' , cursor: 'default' }}
                    ></model-viewer>
                </div>
            </div>

            <div className="home_2">
                <Home_2 />
            </div>
            <div className="home_3">
                <Home_3 />
            </div>
            <div className="Home_4">
                <Home_4/>
            </div>
            <div className="Home_5">
                <Home_5/>
            </div>
            <div className="home_6">
                <Home_6/>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default Home;
