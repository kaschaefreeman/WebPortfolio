import React from "react";
import businessWomanWorkingPic from "../../Images/vecteezy_a-business-woman-using-a-laptop-computer-sitting-at-a-table.jpg"
const content = (
  <>
    <p>
      Hi There! My name is Kaschae Freeman, and I am a full-stack software
      engineer, based in the US, currently working at The Last Barbershop. I am
      a graduate of Thinkful's Full-Stack Software Engineering program.
    </p>
    <p>
      In my free time, you will find me learning Angular and Python and
      mastering Javascript, React, CSS, and HTML. Eager to bring my skills and
      experience to a dynamic team and continue growing and learning as a
      professional
    </p>
    <img src={businessWomanWorkingPic} alt="woman working on computer"/>
  </>
);

const aboutMe = { id: "aboutMe", name: "About Me", content };

export default aboutMe;
