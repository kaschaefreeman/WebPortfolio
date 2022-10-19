import React from "react";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="card m-3 border-light shadow-sm">
      <div className="m-1 text-center text-lg-start card-body">
        <h3 className="display-5 card-title">About Me</h3>
        <p>
          Hello, my name is Kaschae (kuh-shay), and I am a junior software
          engineer starting my journey. I approach every team and project with a
          creative and solution-driven mindset. I am passionate about writing
          clean code that adheres to software principles such as DRY and
          reusability and designing interfaces that optimize accessibility &
          user experience.
        </p>
        <p>
          In the past, I headed a team of 6 data entry clerks for a local refuse
          collection company for 5 years. As the company grew we constantly needed to
          develop new systems and procedures to keep up with the growing number
          of requests. Through building interactive worksheets and databases
          using VBA and SQL I discovered my passion for creating innovative
          solutions for everyday problems through code. This discovery had then
          lead me to attend Thinkful, where I have developed a proficiency in
          JavaScript for front-end and back-end programming.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
