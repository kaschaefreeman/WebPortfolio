import React from "react";

const highlightInfo = [
  {
    title: "Web Development",
    skills:
      "Full-Stack Web Developer proficient in building full-stack web applications with PERN stack, PostgreSQL, Express, React, and NodeJS",
  },
  {
    title: "Database",
    skills:
      "Previous Lead Data Analyst with 5 years experience building and maintaining Relational SQL databases in a professional setting.  Able to build and connect RESTful API's with databases",
  },
  {
    title: "Leadership",
    skills:
      "Current leading software engineer working on The Last Barbershop's website.  Previous Lead Data Analyst for team of 6. Experienced with leading teams and communicating across different departments",
  },
];

const content = highlightInfo.map(({ title, skills }, index) => {
  return (
    <div class="card flex-row my-3" key={index}>
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{skills}</p>
      </div>
    </div>
  );
});

const highlights = { id: "highlights", name: "Highlights", content };

export default highlights;
