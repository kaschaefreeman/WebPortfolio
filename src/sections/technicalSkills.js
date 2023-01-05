import React from "react";
  //declare skill types and attributes to be mapped to a list
  const skills = [
    {
      type: "Front-End",
      attributes: ["HTML", "CSS", "Javascript", "React", "Bootstrap"],
    },
    {
      type: "Back-End",
      attributes: ["Node.js", "Express", "RESTful API", "PostgreSQL"],
    },
    {
      type: "Skills",
      attributes: [
        "Accessibility",
        "SEO",
        "Agile Methodology",
        "Debugging",
        "Problem Solving",
      ],
    },
    {
      type: "Tools",
      attributes: ["Git Bash", "Github", "VS Code", "Postman", "DBeaver"],
    },
  ];

  //Map each list to render a list with a heading
  const skillsList = skills.map(({ type, attributes }, index) => {
    const attributesList = attributes.map((attribute) => (
      <li key={attribute} data-aos="slide-up">{attribute}</li>
    ));
    return (
      <div
        key={type}
        className="col-6 col-lg-3 mt-lg-3 mb-lg-3 py-3 text-center skillListContainer "
      >
        <h4 className="text-secondary">{type}</h4>
        <ul className="skillList">{attributesList}</ul>
      </div>
    );
  });
  //Render Container with skill list
  const content = <div className="row justify-content-between m-5">{skillsList}</div>
  const technicalSkills = { id: "technicalSkills", name: "Technical Skills", content }

export default technicalSkills;
