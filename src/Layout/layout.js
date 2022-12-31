import React from "react";
import "./layout.css"
import SectionLayout from "../sections/sections";
import aboutMe from "../sections/aboutMe";
import highlights from "../sections/highlights";
import projects from "../sections/projects";
import technicalSkills from "../sections/technicalSkills";
import Header from "../header/Header";
import Navigation from "../navigation/navigation";

const Layout = () => {
  return (
    <main id="home">
      <Navigation />
      <Header />
      <article>
        <SectionLayout section = {aboutMe}/>
        <SectionLayout section={highlights} />
        <SectionLayout section={technicalSkills} />
        <SectionLayout section={projects} />
      </article>
    </main>
  )
};

export default Layout;
