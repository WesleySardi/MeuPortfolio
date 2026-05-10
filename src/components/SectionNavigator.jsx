import "./SectionNavigator.css";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experiência" },
  { id: "education", label: "Formação" },
  { id: "projects", label: "Projetos" },
];

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="section-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={activeSection === section.id ? "active" : ""}
        >
          <span className="dot">
            {activeSection === section.id ? "●" : "○"}
          </span>

          {section.label}
        </button>
      ))}
    </div>
  );
}
