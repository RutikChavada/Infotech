import React from "react";
import img from "../../assets/contact.jpg";
import "./Home_6.css";
import { useNavigate } from "react-router-dom";

function Home_6() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <div className="h3left">
          <h1> Collaborate on Your Next Big Idea</h1>
          <h3>
           Ready to turn your concept into a reality? Our team is here to bring your ideas to life with innovation.
          </h3>
          <div className="button1" onClick={() => {
            window.scrollTo(0, 0);
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

export default Home_6;
