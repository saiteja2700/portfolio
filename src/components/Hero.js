// src/components/Hero.js
import React, { useEffect, useMemo, useState } from 'react';
import profileImage from '../assets/profile.jpeg';
import resumePDF from '../assets/resume.pdf';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');

  const texts = useMemo(() => ['Software Engineer', 'Web Developer', 'Tech Enthusiast'], []);

  useEffect(() => {
    let index = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timer;

    const typeText = () => {
      setCurrentText(
        isDeleting
          ? texts[index].substring(0, currentCharIndex - 1)
          : texts[index].substring(0, currentCharIndex + 1)
      );

      if (!isDeleting && currentCharIndex === texts[index].length) {
        timer = setTimeout(() => {
          isDeleting = true;
        }, 1000);
      } else if (isDeleting && currentCharIndex === 0) {
        index = (index + 1) % texts.length;
        isDeleting = false;
      }

      currentCharIndex = isDeleting ? currentCharIndex - 1 : currentCharIndex + 1;
      timer = setTimeout(typeText, isDeleting ? 100 : 200);
    };

    typeText();

    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <div className="hero" id="hero">
      <ThemeToggle />

      <div className="hero-content">
        <img src={profileImage} alt="Sai Teja Alishala" className="profile-image" />
        <div className="hero-text">
          <h1>Sai Teja Alishala</h1>
          <h3 className="animated-text">{currentText}</h3>
          <p>I'm a Full-stack developer, currently pursuing my Master's in Information Systems at Saint Louis University.</p>
          <p>Email: saitejalishala@gmail.com</p>
          <p>Phone: (602) 582-2760</p>

          <div className="social-links">
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>

          <a href={resumePDF} className="resume-button" download>
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
