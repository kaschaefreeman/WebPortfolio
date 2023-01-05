import React from "react";
import "./navigation.css";

const Navigation = () => {

  //Declare links and link names
  const headings = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#aboutMe" },
    { name: "Highlights", link: "#highlights" },
    { name: "Technical Skills", link: "#technicalSkills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#home" },
  ];

  //Function to change the visible url removing the id anchor tag on click of a navigation link that goes to an id section on the page
  const replaceUrl = () => {
    setTimeout(() => {
      window.history.pushState(document.html, document.title, document.URL.split('#')[0]);
    }, 0.5)
  }

  //Map headings to each navigation list item
  const listItems = headings.map(({ name, link }) => {
    return (
      <li key={name} className="nav-item">
        <a className="nav-link px-5" href={link}>
          <div
            className="d-block"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            onClick={replaceUrl}
          >
            {name}
          </div>
        </a>
      </li>
    );
  });
  //Return navigation bar with list items
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <a href="#home" className="navbar-brand" onClick={replaceUrl}>
        <h1>Kaschae Freeman</h1>
      </a>
      <button
        id="toggle-button"
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-0 m-0" id="navbarNav">
        <ul className="navbar-nav">{listItems}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
