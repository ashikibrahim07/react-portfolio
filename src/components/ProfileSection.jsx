import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import resumeExamplePDF from "../assets/Ashik_Ibrahim_Web_Developer_Resume.pdf";
import Tooltip from "@mui/material/Tooltip";

function ProfileSection() {
  const openPDF = () => {
    window.open(resumeExamplePDF);
  };

  return (
    <section id="profile">
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Ashik Ibrahim S</h1>
        <p className="section__text__p2">PERN Stack Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-1" onClick={openPDF}>
            Download CV
          </button>
          <button
            className="btn btn-color-2"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <Tooltip title="LinkedIn Profile">
            <img
              src={linkedinIcon}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/ashik-ibrahim-s/")
              }
            />
          </Tooltip>
          <Tooltip title="GitHub Profile">
            <img
              src={githubIcon}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/ashikibrahim07")
              }
            />
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
