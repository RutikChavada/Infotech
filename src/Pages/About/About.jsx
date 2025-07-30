import React from 'react'
import './About.css';
import harshil from '../../assets/harshil.jpg';
import rutvik from '../../assets/rutvik.jpg';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: "Rutvik Chavada",
    role: "Co-Founder & CEO",
    image: rutvik,
    description: "A visionary leader with expertise in full-stack development and business strategy. Harshil brings innovative thinking and technical excellence to every project, ensuring our solutions drive real business value.",
    skills: ["Full-Stack Development", "Business Strategy", "Project Management", "Team Leadership"],
    experience: "5+ Years",
    education: "Computer Science & Engineering"
  },
  {
    name: "Harshil Kothiya",
    role: "Co-Founder & CTO",
    image: harshil,
    description: "A technology enthusiast and expert in modern web technologies and AI/ML solutions. Rutvik leads our technical initiatives and ensures we stay ahead of industry trends and best practices.",
    skills: ["AI/ML Development", "Web Technologies", "System Architecture", "Innovation"],
    experience: "5+ Years",
    education: "Information Technology"
  }
];

const companyValues = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that set our clients apart in the digital landscape."
  },
  {
    title: "Excellence",
    description: "Every project we undertake is crafted with meticulous attention to detail, ensuring the highest quality standards and exceptional user experiences."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and maintain transparent communication with our clients throughout the development process."
  },
  {
    title: "Reliability",
    description: "Our commitment to delivering projects on time, within budget, and exceeding expectations has earned us the trust of our clients."
  }
];

const achievements = [
  { number: "15+", label: "Projects Delivered" },
  { number: "7+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
];

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">About <span>Us</span></h1>
          <p className="hero-subtitle">
            We are a passionate team of innovators dedicated to transforming ideas into powerful digital solutions. 
            Our mission is to help businesses thrive in the digital age through cutting-edge technology and creative problem-solving.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <p className="story-text">
              Founded with a vision to bridge the gap between technology and business success, our startup emerged from the shared passion of two tech enthusiasts who believed in the power of innovative digital solutions. What started as a small team working on local projects has grown into a trusted partner for businesses seeking to establish their digital presence and drive growth through technology.
            </p>
            <p className="story-text">
              Today, we specialize in creating comprehensive web applications, AI-powered solutions, and data-driven insights that help our clients achieve their goals. Our journey is marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to delivering exceptional value to our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-container">
          <h2 className="section-title">Meet the Founders</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="member-overlay">
                    <div className="member-role">{member.role}</div>
                  </div>
                </div>
                
                <div className="member-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-description">{member.description}</p>
                  
                  <div className="member-details">
                    <div className="detail-item">
                      <span className="detail-label">Experience:</span>
                      <span className="detail-value">{member.experience}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Education:</span>
                      <span className="detail-value">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Expertise:</h4>
                    <div className="skills-tags">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="values-container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span className="icon-text">{value.title.charAt(0)}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <div className="mission-container">
          <div className="mission-content">
            <h2 className="section-title">Our Mission</h2>
            <p className="mission-text">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We strive to be the trusted technology partner that helps our clients navigate the digital landscape with confidence and achieve their strategic objectives.
            </p>
            <div className="mission-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span className="highlight-text">Deliver exceptional results</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <span className="highlight-text">Innovate continuously</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <span className="highlight-text">Build lasting partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help bring your vision to life and drive your business forward with our expertise and innovative solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/contact');
                        }}>Start a Project</button>
            <button className="cta-button secondary" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/contact');
                        }}>Get in Touch</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About