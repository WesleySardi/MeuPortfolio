import "./Skills.css";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaNodeJs,
  FaMicrosoft,
  FaCloud,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiDotnet,
  SiSpringboot,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "React Native", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Java", icon: <FaJava /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "SQL Server", icon: <FaMicrosoft /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Azure DevOps", icon: <FaCloud /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Tecnologias</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
