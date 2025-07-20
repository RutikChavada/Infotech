import React from "react";
import "./Home_2.css";
import Slider from "../../Components/imageSlider/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import sol from "../../assets/solution.png"
import team from "../../assets/team.avif"
import tech from "../../assets/one.png"

function Home_2() {
  return (
    <div className="container">
      <div className="header">
        <h1>
          Why Choose <span>XYZ Infotech</span> as Your
          <br /> Technology Partner
        </h1>
      </div>
      <div className="content">
        <p>
          At XYZ Infotech, we specialize in delivering agile, scalable software
          solutions that empower businesses to thrive in the digital age. Our
          approach combines technical excellence with strategic thinking to
          create solutions that drive real business value.
        </p>
        <div className="key-points">
          <div className="point">
            <div className="inner">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>End-to-End Digital Solutions</span>
            </div>
            <div className="image">
              <img src={sol} alt="" />
            </div>
          </div>
          <div className="point">
            <div className="inner">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>Expert Team & Industry Experience</span>
            </div>
            <div className="image">
              <img src={team} alt="" />
            </div>
          </div>
          <div className="point">
            <div className="inner">
              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
              <span>Cutting-Edge Technology Stack</span>
            </div>
            <div className="image">
              <img src={tech} alt="" />
            </div>
          </div>
        </div>
        <p>
          From concept to execution, we collaborate closely with you at every stage
          of your digital transformation journey. Our deep domain knowledge and
          tailored approach ensure that your software is not only functional but
          also optimized for success. Whether it's a custom application,
          data-driven solution, or a complete digital ecosystem, we transform
          your vision into engaging digital experiences that stand out in
          today's competitive market.
        </p>
      </div>
      {/* <Slider /> */}
    </div>
  );
}

export default Home_2;
