import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About</h2>
        
        <div className="about-content">
          <p className="intro">
            Hello, I'm <span className="highlight">Victor Fernando</span>, a Front End Developer based in Salvador, Brazil. 
            I'm a passionate developer who loves coding, web technology and JavaScript.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <h3>My Journey Begins</h3>
              <p>
                My passion for coding started in 2015 when I first discovered web development through online courses. 
                Since then, the love for creating digital experiences has only grown stronger.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Early Challenges</h3>
              <p>
                I first learned HTML and CSS in 2016, but faced challenges when diving deeper into programming. 
                Like many beginners, I found JavaScript complex without proper guidance, which led me to take a break.
              </p>
            </div>

            <div className="timeline-item">
              <h3>The Comeback</h3>
              <p>
                In 2020, I rediscovered my passion through freeCodeCamp and online communities. 
                I committed to consistent learning and building projects, which transformed my skills and confidence.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Current Focus</h3>
              <p>
                Now I'm more goal-oriented and focused than ever. I've built multiple web applications, 
                solved numerous coding challenges, and currently specialize in React.js and modern frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;