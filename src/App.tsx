import React from "react";
import Navbar from "./components/navBar";
import "./App.css";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills/skills";
import Achievements from "./components/achievements/achievements";
import Certification from "./components/certification/certification";
import { useTheme } from "./components/themeContext";

function App() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "bg-black text-white" : "bg-white"}`}>
      <Navbar />
      <div id="about" className="section">
        <About />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="achievements" className="section">
        <Achievements />
      </div>
      <div id="certification" className="section">
        <Certification />
      </div>
    </div>
  );
}

export default App;
