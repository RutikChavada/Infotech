import React from 'react'
import './Portfolio.css';
import ecommerce from '../../assets/ecom.jpg'
import education from '../../assets/education.jpeg'
import finance from '../../assets/finance.jpg'
import healthcare from '../../assets/healthcare.avif'
import travelling from '../../assets/travelling.png'
import datascience from '../../assets/data-science.webp'
import ai from '../../assets/ai.png'
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: ecommerce,
    description: "A comprehensive e-commerce solution with advanced features including user authentication, product management, shopping cart functionality, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Gateway", "Admin Panel"]
  },
  {
    id: 2,
    title: "Educational Learning Platform",
    category: "EdTech",
    image: education,
    description: "An interactive learning management system designed for educational institutions. Features include course management, student progress tracking, interactive assessments, and real-time collaboration tools for enhanced learning experiences.",
    technologies: ["Next.js", "Python", "PostgreSQL", "WebRTC"],
    features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Video Conferencing", "Analytics Dashboard"]
  },
  {
    id: 3,
    title: "Financial Analytics Dashboard",
    category: "FinTech",
    image: finance,
    description: "A sophisticated financial analytics platform providing real-time market data, portfolio management tools, and predictive analytics. Helps financial institutions and investors make data-driven decisions with comprehensive reporting and visualization.",
    technologies: ["React", "Python", "TensorFlow", "Power BI"],
    features: ["Real-time Data", "Portfolio Tracking", "Risk Analysis", "Predictive Models", "Custom Reports"]
  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "Healthcare",
    image: healthcare,
    description: "A comprehensive healthcare management solution for hospitals and clinics. Includes patient records management, appointment scheduling, billing systems, and telemedicine capabilities for modern healthcare delivery.",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    features: ["Patient Records", "Appointment Booking", "Telemedicine", "Billing System", "Staff Management"]
  },
  {
    id: 5,
    title: "Travel Booking Platform",
    category: "Travel & Tourism",
    image: travelling,
    description: "A modern travel booking platform offering flight, hotel, and activity reservations. Features include search optimization, booking management, user reviews, and integrated payment processing for seamless travel planning.",
    technologies: ["React", "Node.js", "MongoDB", "Payment APIs"],
    features: ["Flight Booking", "Hotel Reservations", "Activity Tours", "User Reviews", "Booking Management"]
  },
  {
    id: 6,
    title: "Data Science Analytics Platform",
    category: "Data Science",
    image: datascience,
    description: "An advanced data analytics platform for business intelligence and data visualization. Provides interactive dashboards, predictive analytics, and automated reporting to help organizations extract valuable insights from their data.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    features: ["Interactive Dashboards", "Predictive Analytics", "Data Visualization", "Automated Reports", "Real-time Monitoring"]
  },
  {
    id: 7,
    title: "AI-Powered Chatbot System",
    category: "Artificial Intelligence",
    image: ai,
    description: "An intelligent chatbot system powered by natural language processing and machine learning. Provides automated customer support, lead generation, and personalized user interactions across multiple platforms and industries.",
    technologies: ["Python", "TensorFlow", "NLTK", "React"],
    features: ["Natural Language Processing", "Multi-platform Support", "Lead Generation", "Analytics Dashboard", "Custom Training"]
  }
];

const stats = [
  { number: "15+", label: "Projects Completed" },
  { number: "7+", label: "Happy Clients" },
  { number: "99%", label: "Work Completion Rate" },
  { number: "24/7", label: "Support Available" }
];

function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our <span>Portfolio</span></h1>
          <p className="hero-subtitle">
            Discover our diverse range of successful projects across various industries. 
            We've delivered innovative solutions that drive business growth and user satisfaction.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  {/* <p className="project-description">{project.description}</p> */}
                  
                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <div className="feature-tags">
                      {project.features.map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your vision to life with our expertise and innovative solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/contact');
                        }}>Get Started</button>
            <button className="cta-button secondary" onClick={() => {
                            window.scrollTo(0,0);
                            navigate('/about');
                        }}>Let's Know About Us</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Portfolio