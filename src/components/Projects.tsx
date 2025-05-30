
import { projects } from '../projectsData';
import './projects.css'; // Import direto
const Projects = () => {
  return (
    <section id="projetos" className="projects-section">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
          <div className="project-image-container">
  <img 
    src={project.imageUrl}
    alt={project.title}
    className="project-image"
    style={{
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      objectPosition: 'center'
    }}
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
      className="project-btn demo-btn" // Classes atualizadas
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver demo do projeto ${project.title}`}
    >
      <i className="fas fa-external-link-alt"></i>
      <span>Demo</span>
    </a>
  )}
  {project.codeLink && (
    <a
      href={project.codeLink}
      className="project-btn code-btn" // Classes atualizadas
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver código do projeto ${project.title}`}
    >
      <i className="fab fa-github"></i>
      <span>Código</span>
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
