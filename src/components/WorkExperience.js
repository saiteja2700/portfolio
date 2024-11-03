// src/components/WorkExperience.js
import React, { useState, useEffect, useMemo } from 'react';
import ThemeToggle from './ThemeToggle';
import './WorkExperience.css';

const WorkExperience = () => {
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
    <section className="work active" id="work">
      <ThemeToggle />

      <div className="work-container">
        <div className="work-box">
          <h2>Work Experience</h2>

          <div className="experience" style={animatedStyles}>
            <h3>OpenText Technologies India Private Limited</h3>
            <p><strong>Associate Software Engineer</strong> (November 2021 - July 2023)</p>
            <ul>
              <li>Developed and maintained high-quality software applications using Angular, Java, and SpringBoot.</li>
              <li>Managed server-side logic and integrated RESTful services to handle client-server interactions efficiently.</li>
              <li>Spearheaded the creation of automation test scripts, enhancing software reliability.</li>
              <li>Collaborated with cross-functional teams to troubleshoot and resolve application issues.</li>
              <li>Implemented CI/CD pipelines for optimized deployment workflows.</li>
            </ul>
          </div>

          <div className="experience" style={animatedStyles}>
            <h3>OpenText Technologies India Private Limited</h3>
            <p><strong>Software Engineering Intern</strong> (September 2021 - October 2021)</p>
            <ul>
              <li>Developed and maintained automation test scripts using Selenium.</li>
              <li>Gained in-depth exposure to automation frameworks and techniques.</li>
              <li>Assisted in improving test scripts to enhance automation processes and efficiency.</li>
              <li>Engaged in the complete testing lifecycle while learning automation tool integration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
