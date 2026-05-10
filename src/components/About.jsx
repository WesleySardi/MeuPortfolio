import "./About.css";
import { FaBriefcase, FaGraduationCap, FaGlobe, FaCogs } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* TEXTO */}
        <div className="about-text">
          <h2>Sobre Mim</h2>

          <p>
            Desenvolvedor Full Stack com experiência em construção de aplicações
            web e mobile, utilizando tecnologias modernas como React, React
            Native e .NET.
          </p>

          <p>
            Tenho foco em desenvolvimento de soluções escaláveis, boas práticas
            de código e aprendizado contínuo.
          </p>

          <p className="highlight">
            Busco crescimento profissional na área de TI, contribuindo de forma
            significativa para os projetos e elevando a qualidade das entregas.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="about-info">
          <div className="info-card">
            <FaBriefcase className="icon" />
            <h3>Experiência</h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="info-card">
            <FaGraduationCap className="icon" />
            <h3>Formação</h3>
            <p>Engenharia de Software</p>
          </div>

          <div className="info-card">
            <FaGlobe className="icon" />
            <h3>Idioma</h3>
            <p>Inglês Avançado</p>
          </div>

          <div className="info-card">
            <FaCogs className="icon" />
            <h3>Foco</h3>
            <p>APIs, Web e Mobile</p>
          </div>
        </div>
      </div>
    </section>
  );
}
