import React from 'react';
import './Technologies.css';
import aws from '../../assets/aws.jpeg';
import canva from '../../assets/canva.png';
import css from '../../assets/css2.png';
import dl from '../../assets/deep-learning.jpg';
import doker from '../../assets/doker.png';
import figma from '../../assets/figma2.png';
import firebase from '../../assets/firebase.png';
import flask from '../../assets/flask.jpeg';
import github from '../../assets/github.png';
import html from '../../assets/html.png';
import js from '../../assets/js.png';
import mat from '../../assets/matplot.png';
import mongo from '../../assets/mongo.png';
import next from '../../assets/nextjs.png';
import node from '../../assets/node3.png';
import nltk from '../../assets/nltk.png';
import numpy from '../../assets/numpy.png';
import pandas from '../../assets/pandas.png';
import powerbi from '../../assets/powerbi.png';
import python from '../../assets/python.png';
import reactLogo from '../../assets/react.svg';
import seaborn from '../../assets/seaborn.png';
import sklearn from '../../assets/sklearn.png';
import slack from '../../assets/slack.png';
import sql from '../../assets/sql.png';
import streamlit from '../../assets/streamlit.png';
import tailwind from '../../assets/Tailwind_CSS.png';
import tensorflow from '../../assets/tensorflow.png';
import Footer from '../../Components/Footer/Footer';

const techCategories = [
  {
    name: 'Frontend Technologies',
    description: 'We specialize in modern frontend development using cutting-edge technologies that create responsive, interactive, and user-friendly web applications. Our expertise spans from basic HTML/CSS to advanced React frameworks, ensuring pixel-perfect designs and seamless user experiences. We leverage the latest frontend tools and frameworks to build scalable, maintainable, and high-performance web applications that deliver exceptional user experiences across all devices and platforms.',
    items: [
      { name: 'React', img: reactLogo },
      { name: 'Next.js', img: next },
      { name: 'HTML', img: html },
      { name: 'CSS', img: css },
      { name: 'JavaScript', img: js },
      { name: 'Tailwind', img: tailwind },
      { name: 'Figma', img: figma },
      { name: 'Canva', img: canva },
    ],
  },
  {
    name: 'Backend Technologies',
    description: 'Our backend solutions are built with robust and scalable technologies that power modern web applications. We leverage the strength of Node.js and Python to create efficient server-side logic, APIs, and business logic that drive your applications. Our backend architecture ensures high performance, security, and reliability while providing seamless integration with frontend technologies and databases. We implement best practices for code organization, error handling, and API design to create maintainable and scalable server-side solutions.',
    items: [
      { name: 'Node.js', img: node },
      { name: 'Python', img: python },
      { name: 'Flask', img: flask },
    ],
  },
  {
    name: 'Database Technologies',
    description: 'We implement the right database solutions for your specific needs, from traditional SQL databases to modern NoSQL solutions. Our expertise ensures optimal data storage, retrieval, and management for applications of any scale. We design efficient database schemas, implement proper indexing strategies, and ensure data integrity while providing fast query performance. Our database solutions support both relational and non-relational data models, enabling us to choose the most appropriate technology for each project requirement.',
    items: [
      { name: 'MongoDB', img: mongo },
      { name: 'SQL', img: sql },
      { name: 'Firebase', img: firebase },
    ],
  },
  {
    name: 'Machine Learning & AI',
    description: 'We harness the power of artificial intelligence and machine learning to create intelligent solutions. From natural language processing to deep learning models, we build AI-powered applications that provide valuable insights and automation. Our ML expertise includes predictive modeling, computer vision, natural language processing, and recommendation systems. We implement end-to-end machine learning pipelines, from data preprocessing to model deployment, ensuring robust and scalable AI solutions that drive business value and competitive advantage.',
    items: [
      { name: 'Python', img: python },
      { name: 'Streamlit', img: streamlit },
      { name: 'scikit-learn', img: sklearn },
      { name: 'TensorFlow', img: tensorflow },
      { name: 'NLTK', img: nltk },
      { name: 'Deep Learning', img: dl },
    ],
  },
  {
    name: 'Data Science & Analytics',
    description: 'We transform raw data into actionable insights using advanced analytics and visualization tools. Our data science expertise helps businesses make informed decisions through comprehensive data analysis and beautiful visualizations. We implement statistical analysis, predictive modeling, and data mining techniques to uncover patterns and trends in complex datasets. Our analytics solutions provide real-time dashboards, interactive visualizations, and automated reporting systems that enable data-driven decision making across all business functions.',
    items: [
      { name: 'NumPy', img: numpy },
      { name: 'Pandas', img: pandas },
      { name: 'Matplotlib', img: mat },
      { name: 'Seaborn', img: seaborn },
      { name: 'Power BI', img: powerbi },
    ],
  },
  {
    name: 'Cloud & DevOps',
    description: 'We leverage cloud technologies and DevOps practices to ensure scalable, reliable, and efficient application deployment. Our cloud solutions provide flexibility, security, and cost-effectiveness for modern applications. We implement continuous integration and deployment pipelines, infrastructure as code, and automated testing to streamline development workflows. Our cloud expertise includes containerization, microservices architecture, and serverless computing, enabling us to build and deploy applications that scale automatically and maintain high availability.',
    items: [
      { name: 'AWS', img: aws },
      { name: 'Docker', img: doker },
    ],
  },
  {
    name: 'Development Tools',
    description: 'We use industry-standard development tools and platforms to ensure efficient collaboration, version control, and project management. These tools help us deliver high-quality code and maintain excellent team communication. Our development workflow includes automated testing, code review processes, and continuous integration to ensure code quality and reliability. We implement best practices for project management, issue tracking, and team collaboration to deliver projects on time and within budget while maintaining high standards of code quality and documentation.',
    items: [
      { name: 'GitHub', img: github },
      { name: 'Slack', img: slack },
    ],
  },
];

function Technologies() {
  return (
    <div className="technologies-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our <span>Technologies</span></h1>
          <p className="hero-subtitle">
            We use cutting-edge technologies and modern frameworks to deliver exceptional digital solutions. Explore our comprehensive tech stack that powers innovative applications.
          </p>
        </div>
      </div>

      {/* Technologies in Zigzag Layout */}
      <div className="services-section">
        <div className="services-container">
          {techCategories.map((category, idx) => (
            <div key={category.name} className={`tech-category-section ${idx % 2 === 0 ? 'left-aligned' : 'right-aligned'}`}>
              <div className="category-content">
                <div className="category-header">
                  <h2 className="category-title">{category.name}</h2>
                  <p className="category-description">{category.description}</p>
                </div>
                
                <div className="tech-icons-grid">
                  {category.items.map((item) => (
                    <div className="tech-icon-card" key={item.name}>
                      <div className="tech-icon-wrapper">
                        <img 
                          src={item.img} 
                          alt={item.name} 
                          className="tech-icon" 
                        />
                      </div>
                      <span className="tech-name">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Technologies;