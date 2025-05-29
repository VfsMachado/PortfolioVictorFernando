import React from 'react';
import { projects } from '../projectsData';

const Projects = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={`/${project.imageUrl}`} // acessando a imagem da pasta public
                alt={project.title} 
                className="project-image" 
              />
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              {project.techs.length > 0 && (
                <div className="project-tech">
                  {project.techs.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    className="code-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
