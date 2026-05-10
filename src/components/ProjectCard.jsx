import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="image-container">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="placeholder">
            {project.icon && (
              <div className="placeholder-icon">{project.icon}</div>
            )}
          </div>
        )}

        <div className="overlay">
          <a href={project.github} target="_blank" rel="noreferrer">
            Ver no GitHub
          </a>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-tags">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
