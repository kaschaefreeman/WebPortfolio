import React from "react";
import AboutMe from "../sections/aboutMe";
import Highlights from "../sections/highlights";
import Projects from "../sections/projects";
import TechnicalSkills from "../sections/technicalSkills";
import Header from "./header/Header";
import Navigation from "./navigation/navigation";

const Layout = () => {
  return (
    <main >
      <Navigation />
      <Header />
      <article className="container">
        <AboutMe />
        <Highlights />
        <TechnicalSkills />
        <Projects />
      </article>
    </main>
  );
};

export default Layout;
