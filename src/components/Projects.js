// src/components/Projects.js
import React from 'react';
import ThemeToggle from './ThemeToggle';
import alumniImage from '../assets/alumni-tracking.jpeg';
import criminalImage from '../assets/criminal-identification.jpeg';
import epassImage from '../assets/epass-system.jpeg';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Alumni Tracking System",
      description: "Developed a comprehensive platform using PHP, SQL, and NodeJS to help alumni stay connected with their alma mater. The system allows alumni to track events, updates, and achievements of the college. Alumni can also post job openings and provide mentorship to current students.",
      keyFeatures: [
        "Alumni registration and login system.",
        "Event management and notifications.",
        "Job posting functionality for alumni employers.",
        "Admin interface to manage alumni data and events."
      ],
      outcome: "The platform facilitated better engagement between alumni and the institution, providing current students with job opportunities and mentorship while enabling alumni to stay connected and contribute to the community.",
      image: alumniImage
    },
    {
      title: "Criminal Identification using Facial Recognition",
      description: "Developed an innovative criminal identification system using Flask Web Framework, Python, and Local Binary Pattern Histogram (LBPH) for facial recognition. This tool leverages cloud technology to enable law enforcement to identify criminals based on facial data, which is stored securely on the cloud.",
      keyFeatures: [
        "Real-time facial recognition using video streams or uploaded images.",
        "Integration with cloud storage to maintain a global database of criminals.",
        "Optimized LBPH algorithm for faster identification."
      ],
      outcome: "The system improved the efficiency of criminal identification and enabled faster passport verification procedures across borders.",
      image: criminalImage
    },
    {
      title: "E-pass Generating System",
      description: "Designed a web-based application using Flask and Python to generate travel e-passes during the Covid-19 pandemic. The system dynamically assesses the Covid-19 situation at different destinations and generates travel passes based on government criteria.",
      keyFeatures: [
        "Flask Web Framework for backend logic and routing.",
        "SMS integration for sending passes to users' mobile phones.",
        "Government guidelines API integration for real-time Covid data."
      ],
      outcome: "The system helped control movement between areas with high Covid-19 cases and allowed authorities to manage travel permissions dynamically.",
      image: epassImage
    }
  ];

  return (
    <div className="flashcards-container">
      <ThemeToggle />

      {projects.map((project, index) => (
        <div key={index} className="flashcard">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4>Key Features:</h4>
          <ul>
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          {project.outcome && (
            <>
              <h4>Outcome:</h4>
              <p>{project.outcome}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
