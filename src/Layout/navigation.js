import React from "react";

const Navigation = () => {
  //Declare links and link names
  const headings = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#aboutMe" },
    { name: "Highlights", link: "#highlights" },
    { name: "Technical Skills", link: "#technicalSkills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  //Map headings to each navigation list item
  const listItems = headings.map(({ name, link }) => {
    return (
      <li key={name} className="nav-item">
        <a className="nav-link p-3" href={link}>
          {name}
        </a>
      </li>
    );
  });
  //Return navigation bar with list items
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">{listItems}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
