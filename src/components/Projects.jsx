import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { FaReact, FaJava } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiNfc } from "react-icons/si";
import { MdRestaurant } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Zlo TrackBand",
      description:
        "Sistema de monitoramento com pulseira NFC, app mobile e plataforma web com autenticação via SMS.",
      github: "https://github.com/WesleySardi",
      tech: ["React", "React Native", "Java", "Spring Boot", "JWT"],
      icon: <SiNfc />, // 👈 representa NFC / tracking
    },
    {
      title: "NYC Restaurant Explorer",
      description: "Plataforma para gerenciamento de restaurantes e inspeções.",
      github: "https://github.com/WesleySardi",
      tech: ["Remix", "Java", "PostgreSQL", "Tailwind"],
      icon: <MdRestaurant />, // 👈 restaurante
    },
    {
      title: "Controle de Estoque",
      description: "Sistema otimizado para máquinas com baixo desempenho.",
      github: "https://github.com/WesleySardi",
      tech: ["Java", "PostgreSQL"],
      icon: <FaBoxes />, // 👈 estoque
    },
    {
      title: "Página Institucional",
      description: "Front-end institucional para empresa.",
      github: "https://github.com/WesleySardi",
      tech: ["React", "Styled Components"],
      icon: <FaReact />, // 👈 frontend
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projetos</h2>
        <p className="subtitle">
          Principais projetos desenvolvidos ao longo da minha trajetória
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
