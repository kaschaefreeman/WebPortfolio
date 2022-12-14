import React, {useEffect} from "react";
import profilePic from "../Images/profile-picture-no-bg.png";
import "./header.css";

import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {

  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])

  //Profile picture with pentagon shape
  const myPicture = (
    <img
      src={profilePic}
      className="addBackgroundBlue col-5"
      alt="Kaschae Freeman"
      data-aos="fade-right"
    />
  );

  //List of links to be rendered as contact info and other personal sites
  const linkInfo = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      url: "https://www.linkedin.com/in/kaschae-freeman",
      isDownload: false,
    },
    {
      name: "GitHub",
      icon: "bi-github",
      url: "https://github.com/kaschaefreeman",
      isDownload: false,
    },
    {
      name: "Email",
      icon: "bi-envelope",
      url: "mailto:kaschaefreeman@gmail.com",
      isDownload: false,
    },
    {
      name: "Download Resume",
      icon: "bi-file-earmark",
      url: "../../Files/kaschae-freeman-resume.pdf",
      isDownload: true,
    },
  ];

  //Render all link information to icons with circle border
  const linkButtons = linkInfo.map((link) => {
    const { name, icon, url, isDownload } = link;
    return (
      <li key={name} className="col-1" data-aos="rotate">
        <a href={url} download={isDownload}>
          <i className={`bi ${icon} outsideLinks`} title={name}></i>
        </a>
      </li>
    );
  });

  //Container for Header text and links
  const headerText = (
    <div className="container px-3 mt-3">
      <h2 className="row" data-aos="fade-left">
        <span className="col-auto">Software Developer</span>
        <span className="col-1 vr headingSeparator"></span>
        <span className="col-12 col-lg-auto">Woodbridge, VA</span>
      </h2>
      <p className="lead col-12" data-aos="fade-left">
        Motivated junior software engineer proficient in JavaScript for
        front-end and back-end programming.
      </p>
      <ul className="row">{linkButtons}</ul>
    </div>
  );

  return (
    <header className="addBackgroundBlue">
      {myPicture}
      {headerText}
    </header>
  );
};

export default Header;
