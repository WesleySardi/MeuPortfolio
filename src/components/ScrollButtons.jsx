import "./ScrollButtons.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const sections = ["home", "about", "skills", "education", "projects"];

export default function ScrollButtons() {
  const navigate = (direction) => {
    const current = window.scrollY;

    const sectionPositions = sections.map((id) => ({
      id,
      top: document.getElementById(id)?.offsetTop || 0,
    }));

    let currentIndex = sectionPositions.findIndex(
      (section, index) =>
        current >= section.top - 100 &&
        (index === sectionPositions.length - 1 ||
          current < sectionPositions[index + 1].top - 100),
    );

    if (direction === "down") {
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    document.getElementById(sections[currentIndex])?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons">
      <button onClick={() => navigate("up")}>
        <FaChevronUp />
      </button>

      <button onClick={() => navigate("down")}>
        <FaChevronDown />
      </button>
    </div>
  );
}
