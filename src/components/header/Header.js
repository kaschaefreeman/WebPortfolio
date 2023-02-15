import React from "react";
import "./header.css";


const Header = () => {

  return (
    <header>
      <div className="headerContainer" data-aos="fade-left">
        <h2 className="titleRow">
          <span className="col-auto">Software Developer</span>
          <span className="col-2 mx-3 vr headingSeparator"></span>
          <span className="col-auto">Woodbridge, VA</span>
        </h2>
        <p className="lead col-12">
          Motivated junior software engineer proficient in JavaScript for
          front-end and back-end programming.
        </p>
      </div>
    </header>
  );
};

export default Header;
