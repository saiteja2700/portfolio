// src/components/Skills.js
import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaAngular, FaNodeJs, FaDocker, FaDatabase, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiKubernetes, SiMicrosoftsqlserver, SiNumpy, SiPandas, SiPowerbi, SiGooglecloud, SiCplusplus } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", icon: <FaJava style={{ color: '#f89820' }} /> },
        { name: "Python", icon: <FaPython style={{ color: '#3776AB' }} /> },
        { name: "C", icon: <FaDatabase style={{ color: '#555' }} /> },
        { name: "C++", icon: <SiCplusplus style={{ color: '#00599C' }} /> },
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "SQL", icon: <SiMicrosoftsqlserver style={{ color: '#CC2927' }} /> },
        { name: "Postgres", icon: <SiPostgresql style={{ color: '#336791' }} /> },
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", icon: <FaHtml5 style={{ color: '#E34F26' }} /> },
        { name: "CSS", icon: <FaCss3Alt style={{ color: '#1572B6' }} /> },
        { name: "JavaScript", icon: <FaJs style={{ color: '#F7DF1E' }} /> },
        { name: "Angular", icon: <FaAngular style={{ color: '#DD0031' }} /> },
        { name: "NodeJS", icon: <FaNodeJs style={{ color: '#68A063' }} /> },
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "SpringBoot", icon: <SiSpringboot style={{ color: '#6DB33F' }} /> },
        { name: "GCP", icon: <SiGooglecloud style={{ color: '#4285F4' }} /> },
        { name: "Docker", icon: <FaDocker style={{ color: '#2496ED' }} /> },
        { name: "Kubernetes", icon: <SiKubernetes style={{ color: '#326CE5' }} /> },
        { name: "Power-BI", icon: <SiPowerbi style={{ color: '#F2C811' }} /> },
        { name: "Numpy", icon: <SiNumpy style={{ color: '#013243' }} /> },
        { name: "Pandas", icon: <SiPandas style={{ color: '#150458' }} /> },
      ]
    },
  ];

  return (
    <div className="skills-section">
      <ThemeToggle />

      <h2>Technologies and Tools</h2>
      <p>Using a combination of cutting-edge technologies and reliable open-source software to build user-focused, performant applications.</p>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-items">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
