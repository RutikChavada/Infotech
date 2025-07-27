import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faMobileAlt, 
  faCloud, 
  faChartBar, 
  faPalette, 
  faDatabase,
  faShieldAlt,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/Footer';

const services = [
  {
    icon: faCode,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with cutting-edge technologies. From simple landing pages to complex e-commerce platforms.",
    features: ["React.js", "Node.js", "Next.js", "Full-stack Development"]
  },
  {
    icon: faMobileAlt,
    title: "Mobile Development",
    desc: "Cross-platform mobile applications for iOS and Android. Native and hybrid solutions that deliver exceptional user experiences.",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"]
  },
  {
    icon: faPalette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive user interfaces and seamless user experiences. We create designs that not only look great but also convert.",
    features: ["Figma", "Adobe XD", "Prototyping", "User Research"]
  },
  {
    icon: faDatabase,
    title: "Database Solutions",
    desc: "Robust database design and management solutions. From simple data storage to complex enterprise-level database architectures.",
    features: ["MongoDB", "PostgreSQL", "MySQL", "Database Optimization"]
  },
  {
    icon: faCloud,
    title: "Cloud Services",
    desc: "Scalable cloud infrastructure and DevOps solutions. Deploy, manage, and scale your applications with confidence.",
    features: ["AWS", "Azure", "Google Cloud", "DevOps"]
  },
  {
    icon: faChartBar,
    title: "Data Analytics",
    desc: "Transform your data into actionable insights. Advanced analytics and visualization solutions for informed decision-making.",
    features: ["Power BI", "Tableau", "Python Analytics", "Machine Learning"]
  },
  {
    icon: faShieldAlt,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your digital assets. From vulnerability assessments to security implementation.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
  },
  {
    icon: faRocket,
    title: "Digital Transformation",
    desc: "End-to-end digital transformation services. Modernize your business processes and technology stack for the digital age.",
    features: ["Process Automation", "Legacy Migration", "Digital Strategy", "Change Management"]
  }
];

function Services() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Our <span>Services</span>
          </h1>
          <p className="hero-subtitle">
            Comprehensive digital solutions tailored to transform your business and drive growth in the digital landscape.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card" key={idx}>
                <div className="service-icon-wrapper">
                  <FontAwesomeIcon icon={service.icon} className="service-icon" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="why-choose-container">
          <h2 className="section-title">Why Choose <span>Us</span></h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with deep expertise in modern technologies and industry best practices.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Agile development methodology ensuring quick turnaround times without compromising quality.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and quality control processes to deliver bug-free, production-ready solutions.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support and maintenance services to keep your applications running smoothly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help bring your vision to life</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">View Portfolio</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;