import React from "react";
import project1Img from "../assets/FB-LITE.png";
import project2Img from "../assets/XOXOXO.png";
import project3Img from "../assets/PERSBLOG.png";
import project4Img from "../assets/WHAT_TODO.png";
import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="prj-title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="prj-details-container color-container">
            <div className="article-container">
              <img
                src={project1Img}
                alt="Project 1"
                className="project-img"
                style={{ width: "auto", height: "300px", objectFit: "cover" }}
              />
            </div>
            <h2 className="project-title">Fb Lite Clone</h2>
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
            <Chip
              label="Font Awesome"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <p className="prj-p">
              A responsive replica of Facebook Lite built with HTML, CSS, and
              Font Awesome. Featuring seven core features of FB Lite.
            </p>
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/fb-lite-clone-using-html-css"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <GitHubIcon style={{ marginRight: "10px" }} />
                GitHub
              </a>
              <a
                href="https://fb-lite-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <OpenInNewIcon style={{ marginRight: "10px" }} />
                Live Demo
              </a>
            </div>
          </div>
          <div className="prj-details-container color-container">
            <div className="article-container">
              <img
                src={project2Img}
                alt="Project 2"
                className="project-img"
                style={{ width: "auto", height: "300px", objectFit: "cover" }}
              />
            </div>
            <h2 className="project-title">XO XO XO, a Tic Tac Toe Game</h2>
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
            <Chip
              label="JavaScript"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <p className="prj-p">
              A classic Tic Tac Toe game using HTML, CSS, and JavaScript.
              Features interactive gameplay, smooth animations, and responsive
              design.
            </p>
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/tic-tac-toe-game"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <GitHubIcon style={{ marginRight: "10px" }} />
                GitHub
              </a>
              <a
                href="https://xo-xo-xo.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <OpenInNewIcon style={{ marginRight: "10px" }} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="about-containers">
          <div className="prj-details-container color-container">
            <div className="article-container">
              <img
                src={project3Img}
                alt="Project 3"
                className="project-img"
                style={{ width: "auto", height: "300px", objectFit: "cover" }}
              />
            </div>
            <h2 className="project-title">Personal Blog site</h2>
            <Chip
              label="Node JS"
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
            <Chip
              label="Bootstrap"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <p className="prj-p">
              A Node.js and EJS-based web app for creating, editing, and
              deleting blog posts. Offers a user-friendly interface for easy
              content management.
            </p>
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/pers-blog"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <GitHubIcon style={{ marginRight: "10px" }} />
                GitHub
              </a>
              <a
                href="https://youtu.be/cs0L2dWsQkQ?si=GSawkfebEKY7wcYh"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <PlayCircleOutlineIcon style={{ marginRight: "5px" }} />
                Video Demo
              </a>
            </div>
          </div>

          <div className="prj-details-container color-container">
            <div className="article-container">
              <img
                src={project4Img}
                alt="Project 4"
                className="project-img"
                style={{ width: "auto", height: "300px", objectFit: "cover" }}
              />
            </div>
            <h2 className="project-title">TODO List</h2>
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
            <Chip
              label="Express JS"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="React JS"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <Chip
              label="Node JS"
              style={{
                backgroundColor: "#2D9596",
                color: "#0a192f",
                fontWeight: "600",
                marginRight: "8px",
                marginBottom: "10px",
              }}
            />
            <p className="prj-p">
              A full-stack TODO list application using React, Express.js, and
              PostgreSQL. Features CRUD operations and user authentication.
            </p>
            <div className="btn-container">
              <a
                href="https://github.com/ashikibrahim07/what-todo"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <GitHubIcon style={{ marginRight: "10px" }} />
                GitHub
              </a>
              <a
                href="https://youtu.be/2N2Pg4Ezt6A?si=IOw7odMrm2P-MzRg"
                target="_blank"
                rel="noreferrer"
                className="btn btn-color-2 project-btn"
              >
                <PlayCircleOutlineIcon style={{ marginRight: "5px" }} />
                Video Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
