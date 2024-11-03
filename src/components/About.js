// src/components/About.js
import React, { useState, useEffect, useMemo } from 'react';
import ThemeToggle from './ThemeToggle';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const animatedStyles = useMemo(() => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s ease, transform 1s ease',
  }), [isVisible]);

  return (
    <section className="about active" id="about">
      <ThemeToggle />

      <div className="about-container">
        <div className="about-box">
          <h2>About Me</h2>
          <p style={animatedStyles}>
            Hi, I am Sai Teja Alishala, a passionate Full Stack Developer currently pursuing a Master's degree at Saint Louis University.
          </p>
          <p style={animatedStyles}>
            I have a strong background in building efficient, scalable, and user-friendly web applications.
          </p>
          <p style={animatedStyles}>
            With over 2 years of experience in both backend and frontend development, I enjoy solving complex problems through code.
          </p>
          <p style={animatedStyles}>
            My hobbies include photography and traveling, which inspire creativity in my development work.
          </p>
          <p style={animatedStyles}>
            I am dedicated to creating innovative solutions that enhance user experiences and drive application performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
