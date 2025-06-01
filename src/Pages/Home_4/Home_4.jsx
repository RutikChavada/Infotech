import React from "react";
import "./Home_4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Home_4() {
  return (
    <>
      <div className="Container">
        <div className="topheading">
          <h1>How We Build Solutions ?</h1>
          <h3>
            Whatever your needs are—whether machine learning or data science or
            web development—we’ve designed a specialized approach that covers
            them all.
          </h3>
        </div>
        <div className="content_box1">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faFileCircleCheck} id="icon1" />
            </div>
            <div className="paragraph">
              <h2> Gathering Client Requirements</h2>
              <p>
                we start by deeply understanding your business needs and goals.
                Our team engages in detailed discussions to identify key
                requirements, gather insights on the target audience, and define
                the project scope. Clear communication ensures we align with
                your vision from the outset. This collaborative approach helps
                us create a customized software solution that addresses your
                challenges and opportunities. Your feedback is invaluable in
                shaping the project’s specifications and direction. We
                meticulously document every detail to maintain focus and clarity
                throughout the process. This foundation ensures a smooth journey
                from concept to launch.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faFileCircleCheck} id="icon2" />
            </div>
            <div className="paragraph">
              <h2> Planning and Solution Architecture</h2>
              <p>
                Once we’ve gathered the requirements, our team crafts a clear
                project plan and technical solution architecture tailored to
                your business. We outline key milestones, deliverables, and
                timelines to ensure transparency and efficiency. Our experienced
                architects design a scalable, secure, and high-performance
                system that meets your needs. We carefully select technologies,
                frameworks, and tools to optimize functionality and future-proof
                your solution. Every detail is aligned with your goals to ensure
                a seamless development process. This phase turns ideas into
                actionable blueprints that guide our work. With a solid
                foundation, we’re ready to bring your vision to life.
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
              <h2> Development and Quality Assurance</h2>
              <p>
                Our expert developers bring the solution to life,
                writing clean, efficient, and scalable code. We follow industry
                best practices to ensure every feature functions smoothly and
                securely. Simultaneously, our quality assurance team rigorously
                tests the software to identify and resolve any issues early.
                Automated and manual testing help maintain high standards of
                performance and usability. We keep you updated with progress
                reports and welcome your feedback. This collaboration ensures
                the final product aligns with your expectations and business
                goals. 
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faFileCircleCheck} id="icon2" />
            </div>
            <div className="paragraph">
              <h2>Quality Testing and Deployment</h2>
              <p>
                Before launch, we conduct thorough testing to ensure every
                feature works perfectly. Our QA team checks performance,
                security, and usability to catch any potential issues. This
                rigorous process guarantees your software meets the highest
                standards. Once testing is complete, we prepare for a seamless
                deployment. Our experts handle the transition to the live
                environment with minimal disruption. We also provide post-launch
                support to ensure smooth operation. With us, your software is
                ready for success from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_4;
