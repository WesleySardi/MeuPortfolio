import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

import SectionNavigator from "./components/SectionNavigator";
import ScrollButtons from "./components/ScrollButtons";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <SectionNavigator />
      <ScrollButtons />

      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </>
  );
}
