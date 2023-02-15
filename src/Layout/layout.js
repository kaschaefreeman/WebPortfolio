import React from "react";
import "./layout.css";
import SectionLayout from "../components/sections/sections";
import aboutMe from "../components/sections/aboutMe";
import highlights from "../components/sections/highlights";
import projects from "../components/sections/projects";
import technicalSkills from "../components/sections/technicalSkills";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/navigation";

const Layout = () => {
  return (
    <div className="appContainer" id="home">
      <div className="col-lg-4 col-12 m-0 sticky-top">
        <Navigation />
      </div>
      <main className="m-0 col-12 col-lg-8 align-content-end">
        <Header />
        <article>
          <SectionLayout section={aboutMe} />
          <SectionLayout section={highlights} />
          <SectionLayout section={technicalSkills} />
          <SectionLayout section={projects} />
        </article>
      </main>
      <footer className="footer col-12"><a href="https://www.vecteezy.com/free-vector/cartoon-computer">Cartoon Computer Vectors by Vecteezy</a></footer>
    </div>
  );
};

export default Layout;
