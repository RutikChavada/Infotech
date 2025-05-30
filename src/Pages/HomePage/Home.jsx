import React from "react";
import "./Home.css";
import Home_2 from "../Home_2/Home_2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 
import Home_3 from "../Home_3/Home_3";

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
        </>
    );
}

export default Home;
