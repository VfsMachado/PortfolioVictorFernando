import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Chamados",
    description: "Ferramenta simples para abertura e acompanhamento de chamados técnicos...",
    image: "atendimentochamados.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://vfsmachado.github.io/AtendimentoChamados-vfsmachado/",
    codeLink: "https://github.com/VfsMachado/AtendimentoChamados-vfsmachado"
  },
  // ... outros projetos
];

const Projects: React.FC = () => {
  return (
    <section id="projetos">
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
                <a href={project.codeLink} className="code-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;