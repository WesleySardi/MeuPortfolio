import "./Education.css";

import {
  FaGraduationCap,
  FaGlobe,
  FaLightbulb,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Education() {
  const certificates = [
    {
      title: "Tailwind CSS do básico ao avançado + Projetos",
      description:
        "O curso explora a fundo o Tailwind CSS por meio de aulas práticas e projetos inspirados em plataformas como Spotify e Amazon. Ensina a utilizar quase todas as classes nativas do Tailwind, além de configurar o tailwind.config.js para criar novas classes personalizadas quando necessário. Durante os projetos, aplica os conceitos de forma prática, construindo interfaces modernas, responsivas e totalmente estilizadas com Tailwind, sempre buscando tirar o máximo proveito da biblioteca.",
      link: "https://www.udemy.com/certificate/UC-6fda21e1-11d9-415e-b0dc-52212fe2f05c/",
    },
    {
      title: "Curso Web API ASP .NET Core Essencial (.NET 8)",
      description:
        "Fundamentos da linguagem, ES6+, orientação a objetos e manipulação de APIs.",
    },
    {
      title: "JavaScript do básico ao avançado (c/ Node.js e projetos)",
      description:
        "Curso abrangente de JavaScript, desde conceitos básicos como variáveis, funções e manipulação do DOM, até tópicos intermediários, como orientação a objetos, manipulação de eventos, promises, async/await e integração com Node.js. O curso foi reforçado com diversos projetos práticos para consolidar o aprendizado.",
      link: "https://www.udemy.com/certificate/UC-948bca75-024a-4be6-a456-eb9031144931/",
    },
    {
      title:
        "Curso completo de língua inglesa no CCAA (Centro de Cultura Anglo Americana) CCAA",
      description:
        "Certificado de conclusão do curso avançado superior de inglês no CCAA - Centro de Cultura Anglo Americana.",
      link: "https://www.linkedin.com/in/wesleysardi/overlay/Certifications/258742164/treasury?profileId=ACoAADxYQTwBhgL5wi4yJUg4SdahR4IEj-THgtA",
    },
    {
      title: "Docker do 0 à Maestria: Contêineres Desmistificados + EXTRAS",
      description:
        "Curso introdutório ao Docker, apresentando os principais conceitos de virtualização, containers, imagens e volumes. Ensinou como criar e configurar containers, construir imagens personalizadas e utilizar Docker Compose. Também explorou o uso de máquinas virtuais e a importância da conteinerização para ambientes de desenvolvimento e produção.",
      link: "https://www.udemy.com/certificate/UC-8a1414b3-1154-468c-baa6-5762b695956f/",
    },
    {
      title: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
      description:
        "Curso completo de React.js, com abordagem prática por meio de projetos, incluindo um inspirado no Instagram. Foram abordados conceitos fundamentais e avançados como componentes funcionais, hooks (useState, useEffect, useReducer), roteamento com React Router, consumo de APIs, Redux para gerenciamento de estado e boas práticas no desenvolvimento de SPAs.",
      link: "https://www.udemy.com/certificate/UC-cd688e15-2e77-4453-a583-fcf0ee9ec142/",
    },
    {
      title: "Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)",
      description:
        "Curso completo sobre versionamento de código com Git e GitHub. Incluiu desde os conceitos iniciais de controle de versões até o uso de comandos mais avançados como branch, merge, rebase e stash. Também abordou o uso de Gist e publicação de projetos via GitHub Pages, promovendo boas práticas em projetos colaborativos.",
      link: "https://www.udemy.com/certificate/UC-ae9c37eb-e7b2-4ca5-8076-3683a9b708cc/",
    },
    {
      title: "Java COMPLETO 2023 Programação Orientada a Objetos +Projetos",
      description:
        "Curso de Java do nível básico ao intermediário, com foco em Programação Orientada a Objetos (POO). Através de projetos práticos, como a criação de um jogo de xadrez via terminal, o curso abordou conceitos como classes, objetos, herança, encapsulamento e polimorfismo, além de reforçar a lógica de programação.",
      link: "https://www.udemy.com/certificate/UC-760b7d82-84db-4dec-92ad-bb79fea0caba/",
    },
    {
      title: "REST API's RESTFul do 0 à AWS c. Spring Boot 3 Java e Docker",
      description:
        "Curso avançado voltado à construção de APIs RESTful utilizando Java com Spring Boot 3. Incluiu integração com tecnologias como JUnit para testes, Hibernate para persistência, Spring Security para autenticação e autorização, além da criação de um CRUD completo. O projeto final foi implementado em ambiente com Docker e integrado à AWS, simulando um cenário real de produção.",
      link: "https://www.udemy.com/certificate/UC-9049cf1d-c336-4c01-b56e-e04fba187b7a/",
    },
    {
      title: "PHP: CONCEITOS, LIDANDO COM DADOS, LOOPS E MAIS",
      description:
        "Curso introdutório de programação com PHP, abordando lógica de programação com variáveis, estruturas condicionais, laços de repetição e manipulação de dados. Proporcionou a base para o desenvolvimento backend dinâmico e a interação com dados em aplicações web.",
      link: "https://www.alura.com.br/curso-online-php-primeiros-passos",
    },
    {
      title: "HTML5 E CSS3 PARTE 3: TRABALHANDO COM FORMULÁRIOS E TABELAS",
      description:
        "Curso voltado para a introdução e prática na criação de formulários e tabelas em páginas web. Foram abordadas boas práticas para captação de dados do usuário, organização de informações em tabelas e acessibilidade, além de estilização com CSS para melhor experiência visual.",
      link: "https://www.alura.com.br/curso-online-html-css-cabecalho-footer-variaveis-css",
    },
    {
      title: "HTML5 E CSS3 PARTE 2: POSICIONAMENTO, LISTAS E NAVEGAÇÃO",
      description:
        "Continuação do aprendizado em HTML5 e CSS3, com foco em técnicas de posicionamento de elementos na página, criação e estilização de listas e desenvolvimento de menus de navegação. O curso proporcionou maior controle sobre o layout e interatividade das páginas web.",
      link: "https://www.alura.com.br/curso-online-html-css-classes-posicionamento-flexbox",
    },
    {
      title: "HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB",
      description:
        "Curso introdutório que abordou os conceitos fundamentais do desenvolvimento web com HTML5 e CSS3. As tarefas incluíram a construção de uma página básica, organização de conteúdo com tags semânticas e aplicação de estilos simples, promovendo a compreensão da estrutura e aparência de um site.",
      link: "https://www.alura.com.br/curso-online-html-css-ambiente-arquivos-tags",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2>Formação & Cursos</h2>

        {/* GRID SUPERIOR */}
        <div className="education-grid">
          <div className="education-card">
            <FaGraduationCap className="icon" />

            <h3>Formação Acadêmica</h3>

            <p>
              Bacharelado em Engenharia de Software
              <br />
              <span>Universidade Católica de Santa Catarina</span>
              <br />
              <small>2021 - 2024</small>
            </p>
          </div>

          <div className="education-card">
            <FaGlobe className="icon" />

            <h3>Idiomas</h3>

            <p>Inglês Avançado</p>
          </div>

          <div className="education-card">
            <FaLightbulb className="icon" />

            <h3>Experiência Acadêmica</h3>

            <ul>
              <li>PAC (Projetos colaborativos)</li>
              <li>Hackathons e Ideathons</li>
              <li>Conversação em inglês</li>
            </ul>
          </div>
        </div>

        {/* CERTIFICADOS */}
        <div className="certificates-section">
          <div className="certificates-header">
            <h3>Formação Complementar</h3>

            <p>
              Cursos, especializações e certificações voltadas para
              desenvolvimento Full Stack.
            </p>
          </div>

          <div className="certificates-scroll">
            {certificates.map((course, index) => (
              <div key={index} className="certificate-card">
                <div className="certificate-info">
                  <h4>{course.title}</h4>

                  <p>{course.description}</p>
                </div>

                <a
                  href={course.link || "#"}
                  target={course.link ? "_blank" : undefined}
                  rel={course.link ? "noreferrer" : undefined}
                  className={!course.link ? "disabled-link" : ""}
                  onClick={(e) => !course.link && e.preventDefault()}
                  data-tooltip={
                    !course.link ? "Certificado não disponível" : ""
                  }
                >
                  Certificado
                  <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
