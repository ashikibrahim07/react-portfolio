import React from "react";
import project1Img from "../assets/FB Lite Clone.jpg";
import project2Img from "../assets/persblog.jpg";
import project3Img from "../assets/what-todo.png";

import Chip from "@mui/material/Chip";
import arrowIcon from "../assets/arrow.png";
function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="prj-title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img src={project1Img} alt="Project 1" className="project-img" />
            </div>
            <h2 className=" project-title">Fb Lite Clone</h2>
            <Chip
              label="HTML"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="CSS"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/fb-lite-clone-using-html-css"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Github
              </a>
              <a
                href="https://ashikibrahim07.github.io/fb-lite-clone-using-html-css/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img src={project2Img} alt="Project 2" className="project-img" />
            </div>
            <h2 className=" project-title">Personal Blog site</h2>
            <Chip
              label="Node.js"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="EJS"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/pers-blog"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Github
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img src={project3Img} alt="Project 3" className="project-img" />
            </div>
            <h2 className=" project-title">TODO List</h2>
            <Chip
              label="React"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="Node.js"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="PostgreSQL"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/what-todo"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Github
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div class="project-text-container">
          <p>
            These are my main projects. If you're interested in exploring
            smaller projects you'll find them on my{" "}
            <span>
              <strong>
                <a href="https://github.com/ashikibrahim07?tab=repositories">
                  GitHub
                </a>
              </strong>
            </span>
            .
          </p>
        </div>
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}
export default Projects;
