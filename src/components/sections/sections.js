import React, { useEffect } from "react";
import "./sections.css";

import AOS from "aos";
import "aos/dist/aos.css";

const SectionLayout = ({ section }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const { id, content, name } = section;

  let fadeAnimation = "";
  switch (id) {
    case "aboutMe":
      fadeAnimation = "fade-up-left";
      break;
    case "highlights":
      fadeAnimation = "zoom-out";
      break;
    case "technicalSkills":
      fadeAnimation = "flip-up";
      break;
    default:
      fadeAnimation = "fade-right";
  }

  return (
    <section name={id} id={id}>
      <h3 data-aos="fade-right">{name}</h3>
      <div className="textDecoration"></div>
      <div div className="contentContainer" data-aos={fadeAnimation}>
        {content}
      </div>
    </section>
  );
};

export default SectionLayout;
