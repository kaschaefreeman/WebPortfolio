import React from "react";
import profilePic from "../Images/profilePicWithBackground.png";

const Header = () => {
  return (
    <header id="home" className="jumbotron addBackgroundBlue">
      <div className="container text-white text-center text-lg-start">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col col-4 col-lg-2 mt-3">
            <img
              src={profilePic}
              className="profilePicture"
              alt="Kaschae Freeman"
            />
          </div>
          <div className="col col-12">
            <h1 className="display-5">Kaschae Freeman</h1>
            <h2 className="row justify-content-center justify-content-lg-start">
              <span className="col col-auto">Software Developer</span>
              <span className="col col-auto headingSeparator">|</span>
              <span className="col col-12 col-lg-auto">Woodbridge, VA</span>
            </h2>
            <p className="lead">
              Motivated junior software engineer proficient in JavaScript for
              front-end and back-end programming.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
