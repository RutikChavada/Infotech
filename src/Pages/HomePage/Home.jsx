import React from "react";
import "./Home.css";
import Home_2 from "../Home_2/Home_2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faRocket, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Home_3 from "../Home_3/Home_3";
import Home_4 from "../Home_4/Home_4";
import image5 from "../../assets/home111.png";
import Home_5 from "../Page_5/Page_5";
import Home_6 from "../Home_6/Home_6";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <div className="home-container">
                <div className="left">
                    <h1>Transforming Ideas into Digital Excellence</h1>
                    <div className="mid_heading">
                        <p>We are a team of passionate innovators dedicated to crafting cutting-edge digital solutions. From startups to enterprises, we transform your vision into reality through expert web development, mobile apps, and custom software solutions. Let's build something extraordinary together.</p>
                    </div>
                    <div className="list1">
                        <div className="one">
                            <FontAwesomeIcon icon={faRocket} className="icon"/>
                            <h3>Innovation</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faLightbulb} className="icon"/>
                            <h3>Creativity</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faChartLine} className="icon"/>
                            <h3>Growth</h3>
                        </div>
                        <div className="one">
                            <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
                            <h3>Quality</h3>
                        </div>
                    </div>

                    <div className="buttons">
                        <div className="contact" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/contact');
                        }}>
                            Get Started
                        </div>
                        <div className="contact" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/about');
                        }}>
                            Learn More
                        </div>
                    </div>
                </div>
                {/* <div className="model-container">
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
                </div> */}
                <div className="img">
                    <img src={image5} alt="Digital Solutions" />
                </div>
            </div>

            <div className="home_2">
                <Home_2 />
            </div>
            <div className="home_3">
                <Home_3 />
            </div>
            <div className="Home_4">
                <Home_4 />
            </div>
            <div className="Home_5">
                <Home_5 />
            </div>
            <div className="home_6">
                <Home_6 />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default Home;

