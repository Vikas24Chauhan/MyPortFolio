import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="education" element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </>
  );
}

export default App;
