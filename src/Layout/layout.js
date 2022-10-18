import React from "react";
import AboutMe from "../sections/aboutMe";
import Highlights from "../sections/highlights";
import Projects from "../sections/projects";
import TechnicalSkills from "../sections/technicalSkills";
import Footer from "./footer";
import Header from "./Header";
import Navigation from "./navigation";

const Layout = () => {
  return (
    <main className="bg-light">
      <Header />
      <Navigation />
      <article className="container">
        <AboutMe />
        <Highlights />
        <TechnicalSkills />
        <Projects />
      </article>
      <Footer />
    </main>
  );
};

export default Layout;
