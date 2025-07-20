import React from "react";
import "./Home_4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFileCircleCheck, 
    faLightbulb, 
    faCode, 
    faRocket 
} from "@fortawesome/free-solid-svg-icons";

function Home_4() {
  return (
    <div className="Container">
      <div className="topheading">
        <h1>Our Development Process</h1>
        <h3>
          We follow a systematic approach to transform your ideas into powerful digital solutions.
          Our proven methodology ensures quality, efficiency, and success at every step.
        </h3>
      </div>
      <div className="content_box1">
        <div className="box">
          <div className="icon">
            <FontAwesomeIcon icon={faLightbulb} id="icon1" />
          </div>
          <div className="paragraph">
            <h2>Discovery & Requirements</h2>
            <p>
              We begin by deeply understanding your business needs and goals through
              detailed discussions and analysis. Our team works closely with you to
              identify key requirements, target audience insights, and project scope.
              This collaborative approach ensures we create a solution that perfectly
              aligns with your vision and business objectives.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <FontAwesomeIcon icon={faCode} id="icon2" />
          </div>
          <div className="paragraph">
            <h2>Planning & Architecture</h2>
            <p>
              Our expert team crafts a comprehensive project plan and technical
              architecture tailored to your needs. We outline key milestones,
              deliverables, and timelines while designing a scalable, secure, and
              high-performance system. This phase transforms your ideas into
              actionable blueprints that guide our development process.
            </p>
          </div>
        </div>
      </div>
      <div className="content_box2">
        <div className="box">
          <div className="icon">
            <FontAwesomeIcon icon={faFileCircleCheck} id="icon1" />
          </div>
          <div className="paragraph">
            <h2>Development & Testing</h2>
            <p>
              Our skilled developers bring the solution to life using clean,
              efficient, and scalable code. We follow industry best practices
              while our QA team conducts rigorous testing to ensure quality and
              performance. Regular updates and feedback sessions keep you informed
              throughout the development process.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <FontAwesomeIcon icon={faRocket} id="icon2" />
          </div>
          <div className="paragraph">
            <h2>Launch & Support</h2>
            <p>
              We conduct thorough final testing and prepare for a seamless
              deployment to your live environment. Our team handles the transition
              with minimal disruption and provides comprehensive post-launch
              support. We ensure your solution is ready for success from day one
              and continues to perform optimally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_4;
