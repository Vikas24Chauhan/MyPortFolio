import { Navbar } from "./Components/Scripts/Navbar";
import { About } from "./Components/Scripts/About";
import { Skills } from "./Components/Scripts/Skills";
import { Projects } from "./Components/Scripts/Projects";
import { Experiences } from "./Components/Scripts/Experiences";
import { Education } from "./Components/Scripts/Education";
import { Footer } from "./Components/Scripts/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router basename="MyPortfolio">
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <Footer />
    </Router>
  );
};

export default App;
