import React from "react";
import codingIcon from "../../Images/vecteezy_modern-flat-design-concept-of-software-development-coding_.jpg"
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
      <li key={attribute}>{attribute}</li>
    ));
    return (
      <div
        key={type}
        className="col-6 col-lg-3 skillListContainer"
      >
        <h4 className="text-secondary">{type}</h4>
        <ul className="skillList">{attributesList}</ul>

      </div>
    );
  });
  //Render Container with skill list
  const content = (<>
  <div className="skillsContainer">{skillsList} </div>
  <img src={codingIcon} alt="coding computer design"/>
  </>)
  const technicalSkills = { id: "technicalSkills", name: "Technical Skills", content }

export default technicalSkills;
