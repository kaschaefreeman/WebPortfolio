import React from "react";
import DecoderImages from "../../Images/Decoder Project/decoderImages";
import FlashcardAppImages from "../../Images/FlashcardApp/flashcardImages";
import weLoveMoviesImages from "../../Images/WeLoveMovies/movies";
import reservationImages from "../../Images/Restaurant Reservations/restaurantReservations";

//Declare projects to be mapped to a card with Carousel of images and description on card body
const projectsDetails = [
  {
    name: "Restaurant Reservations",
    description: [
      "Full stack reservation and table management system.",
      "Implemented react router and express to build a RESTful API in order to make HTTP requests for all of the reservation data stored on the connected PostgreSQL database.",
      "Created CRUD functions and Knex queries to handle data going to and coming from the database.",
      "Used Git to track changes and versions while keeping sensitive information from being pushed to repositories.",
    ],
    images: reservationImages,
    technology: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Knex",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Progress/Versions tracked with Git",
    ],
    repo: "https://github.com/kaschaefreeman/restaurant-reservations",
    demo: "https://reservations-kf-frontend.herokuapp.com/",
  },
  {
    name: "We Love Movies",
    description: [
      "Assembled the back end of a movie website allowing any user to search for their favorite movies.",
      "Used CRUD methods for reviews, and view theaters and movies that are showing.",
      "Applied router and controller functions to retrieve a user's specific requests.",
    ],
    images: weLoveMoviesImages,
    technology: [
      "JavaScript",
      "Node.js",
      "Express",
      "Knex",
      "PostgreSQL",
      "Progress/Versions tracked with Git",
    ],
    repo: "https://github.com/kaschaefreeman/WeLoveMovies-backend",
    demo: "https://we-love-movies-frontend-kf.herokuapp.com/",
  },
  {
    name: "Flashcard-o-matic",
    description: [
      "Created an application that allows users to create, edit, and delete flashcard decks and the cards within them.",
      "Created a REST API and middleware functions to allow user(s) to create, read, update and delete their deck of study cards.",
      "Defined routes and URLs, and used state over multiple components.",
    ],
    images: FlashcardAppImages,
    technology: [
      "JavaScript",
      "React",
      "Express",
      "Knex",
      "HTML",
      "CSS",
      "Progress/Versions tracked with Git",
    ],
    repo: "https://github.com/kaschaefreeman/Flashcard-App",
    demo: null,
  },
  {
    name: "Decoder Ring",
    description: [
      "Built to be an encryption/ decryption application to communicate and read top-secret messages utilizing the test-driven development method.",
    ],
    images: DecoderImages,
    technology: [
      "JavaScript",
      "ES6",
      "HTML5",
      "Node.js",
      "Bootstrap",
      "Mocha",
      "Chai",
    ],
    repo: "https://github.com/kaschaefreeman/Decoder-Ring",
    demo: null,
  },
];

//Map through each project to get the to render a card with carousel of images for each
const projectCards = projectsDetails.map(
  ({ name, description, images, technology, repo, demo }) => {
    const carouselId = name.replace(/\s/g, "");
    //load each carousel images
    const carouselImages = images.map((image, index) => {
      return (
        <div
          className={index === 1 ? "carousel-item active" : "carousel-item"}
          key={index}
          data-bs-interval="10000"
        >
          <img
            src={image}
            className="d-block w-100"
            alt={`${name} - ${index}`}
          />
        </div>
      );
    });
    //Render each carousel with images
    const projectCarousel = (
      <div
        id={carouselId}
        className="carousel slide carousel-dark border-end"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{carouselImages}</div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
    //map each description array item to be a list item
    const descriptionList = description.map((sentence, index) => (
      <li key={`${name}-descriptionItem-${index}`} className="mb-2">
        {sentence}
      </li>
    ));
    //return a card for each project with carousel and description
    return (
      <div className="card" key={name} data-aos="fade">
        <div className="card-header"></div>
        <div className="row g-0">
          <div className="col-lg-7">{projectCarousel}</div>
          <div className="col-lg-5">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <ul className="card-text">{descriptionList}</ul>
              <p className="card-text">Technology: {technology.join(", ")}</p>
              <a href={repo} className="card-link">
                GitHub
              </a>
              {demo ? (
                <a href={demo} className="card-link">
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

const projects = { id: "projects", name: "Projects", content: projectCards };

export default projects;
