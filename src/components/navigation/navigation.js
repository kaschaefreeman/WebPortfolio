import React, { useEffect, useState } from "react";
import "./navigation.css";
import profilePic from "../../Images/profile-picture-no-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  console.log(width, height);

  //Declare links and link names
  const headings = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#aboutMe" },
    { name: "Highlights", link: "#highlights" },
    { name: "Technical Skills", link: "#technicalSkills" },
    { name: "Projects", link: "#projects" },
  ];

  //Function to change the visible url removing the id anchor tag on click of a navigation link that goes to an id section on the page
  const replaceUrl = () => {
    setTimeout(() => {
      window.history.pushState(
        document.html,
        document.title,
        document.URL.split("#")[0]
      );
    }, 1);
  };

  //Map headings to each navigation list item
  const listItems = headings.map(({ name, link }) => {
    return (
      <li key={name} className="">
        <a className="nav-link" href={link}>
          <span
            data-bs-toggle={width<982? "collapse": null}
            data-bs-target="#navbarNav"
            onClick={replaceUrl}
          >
            {name}
          </span>
        </a>
      </li>
    );
  });

  //Profile picture with pentagon shape
  const myPicture = (
    <img src={profilePic} alt="Kaschae Freeman" />
  );

  //List of links to be rendered as contact info and other personal sites
  const linkInfo = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/kaschae-freeman",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/kaschaefreeman",
    },
    {
      name: "Email",
      icon: "bi-envelope",
      url: "mailto:kaschaefreeman@gmail.com",
    },
  ];

  //Render all link information to icons with circle border
  const linkButtons = linkInfo.map((link) => {
    const { name, icon, url } = link;
    return (
      <a href={url} className="mx-2">
        <i className={`bi ${icon} icon-links`} title={name}></i>
      </a>
    );
  });

  //Return navigation bar with list items
  return (
    <nav className="navbar navbar-expand-lg sidebar sticky-top">
      <button
        id="toggle-button"
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a href="#home" className="navbar-brand" onClick={replaceUrl}>
        <h1>Kaschae Freeman</h1>
      </a>
      <div className="collapse navbar-collapse sidebar-sticky" id="navbarNav">
        <ul>
          <li key="myPicture">{myPicture}</li>
          <li key="social">{linkButtons}</li>
          {listItems}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
