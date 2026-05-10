import "./Experience.css";

export default function Experience() {
  const experiences = [
    {
      company: "BMA Sistemas",
      role: "Desenvolvedor Full Stack",
      stack: ".NET, C#, React.js",
      period: "Novembro 2025 • Atual",
      description:
        "Atuação no desenvolvimento de novas aplicações voltadas para suporte ao cliente e gestão interna. Desenvolvimento de um sistema de chamados integrado ao Tawk.to, permitindo abertura de tickets, interação em tempo real com suporte e gerenciamento completo do fluxo de atendimento. O sistema inclui funcionalidades como atribuição de chamados, criação de interações administrativas, finalização de atendimentos, edição de chamados e registro de históricos de conversas no banco de dados para consultas futuras. Também foram implementados envios automáticos de e-mails para notificações de novas interações e um portal para download de versões atuais e antigas dos produtos adquiridos. Além disso, atuei do desenvolvimento de um sistema de avaliação de desempenho e pesquisa de clima organizacional, com suporte aos modelos 90°, 180° e 360°, permitindo criação de ciclos avaliativos, formulários personalizados e geração de relatórios estratégicos para análise de desempenho e melhorias organizacionais.",
    },

    {
      company: "Softin Sistemas",
      role: "Desenvolvedor Full Stack",
      stack: ".NET, C#, React.js, TypeScript",
      period: "Novembro 2023 • Novembro 2025",
      description:
        "Atuação como desenvolvedor full stack utilizando tecnologias modernas no front-end e back-end, com foco na construção de sistemas robustos, escaláveis e de fácil manutenção. Desenvolvimento de APIs RESTful com C#/.NET, criação de interfaces modernas com React.js e TypeScript, modelagem e otimização de bancos PostgreSQL, MySQL e SQL Server, além da utilização do Azure DevOps para CI/CD, versionamento e gerenciamento ágil de tarefas. Participação ativa na criação de novos módulos, manutenção de aplicações, integração com APIs externas, refatoração de código e planejamento de projetos futuros, contribuindo para maior produtividade da equipe e redução de falhas em produção.",
    },

    {
      company: "Tokyo Componentes Eletrônicos LTDA",
      role: "Freelancer Full Stack",
      stack: "React.js, Styled Components",
      period: "Maio 2023 • Julho 2023",
      description:
        "Desenvolvimento de uma página institucional moderna e responsiva utilizando React.js e Styled Components, com foco em componentes reutilizáveis, estilos dinâmicos e arquitetura modular. O projeto foi conduzido utilizando metodologias ágeis como Scrum e Kanban, com acompanhamento de tarefas via Jira. A aplicação foi desenvolvida priorizando usabilidade, acessibilidade e alinhamento com a identidade visual da empresa, garantindo uma navegação intuitiva e uma boa experiência para os usuários.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2>Experiência Profissional</h2>

          <p>
            Experiências voltadas ao desenvolvimento Full Stack utilizando
            tecnologias modernas para criação de aplicações escaláveis e de alta
            qualidade.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-top">
                <div>
                  <h3>{exp.company}</h3>

                  <span>{exp.role}</span>
                </div>

                <small>{exp.period}</small>
              </div>

              <div className="experience-stack">{exp.stack}</div>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
