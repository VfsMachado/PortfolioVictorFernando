import React from 'react';
import './skills.css';

import { FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaPhp, FaNodeJs, FaNpm, FaDatabase, FaCode } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Tecnologias",
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VSCode', icon: <VscVscode /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <DiJavascript1 /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'npm', icon: <FaNpm /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Skills</h2>

        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span> {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;