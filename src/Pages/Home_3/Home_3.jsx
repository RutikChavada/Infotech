import React from "react";
import img from "../../assets/contact.jpg";
import "./Home_3.css";
import { useNavigate } from "react-router-dom";

function Home_3() {
  const navigate = useNavigate()
  return (
    <>
      <div className="main-container">
        <div className="h3left">
          <h1> Let's Discuss Your Project</h1>
          <h3>
            Tell us your ideas, and we'll help bring them to life. Let's turn
            your vision into a powerful reality.
          </h3>
          <div className="button" onClick={() => {
            window.scrollTo(0,0)
            navigate("/contact")}}>
            Contact Us
          </div>
        </div>
        <div className="h3right">
            <img src={img} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home_3;
