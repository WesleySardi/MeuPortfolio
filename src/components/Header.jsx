import "./Header.css";
import profileImg from "../assets/FotoPerfilCurriculo.png";

export default function Header() {
  return (
    <header id="home" className="header">
      <div className="header-container">
        {/* TEXTO */}
        <div className="header-text">
          <h1>Wesley Erik Sardi</h1>
          <h2>Desenvolvedor Full Stack</h2>

          <p className="description">
            Desenvolvedor focado na construção de aplicações modernas,
            escaláveis e de alta qualidade, com ênfase em React.js e .NET.
          </p>

          <p className="location">📍 Joinville - SC, Brasil</p>

          <div className="buttons">
            <a href="https://github.com/WesleySardi" target="_blank">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/wesleysardi/" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="header-image">
          <img src={profileImg} alt="Foto de Wesley" />
        </div>
      </div>
    </header>
  );
}
