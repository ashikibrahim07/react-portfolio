import React from "react";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

function AboutSection() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="abt-title">About Me</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon exp"
              />
              <h2 className="exp-edu">Experience</h2>
              <p>One year of hands on experience in Frontend Development </p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon edu"
              />
              <h2 className="exp-edu">Education</h2>
              <p>B.Sc. Computer Science ,</p>
              <p> M.Sc. Computer Science</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am a recent graduate with a Master's degree in Computer Science,
              specializing in{" "}
              <strong className="strong">front-end development</strong> and the{" "}
              <strong className="strong">PERN stack.</strong>
              Throughout my academic journey, I've focused deeply on modern web
              development, improving my skills in{" "}
              <strong className="strong">
                HTML, CSS, JavaScript, React.js,
              </strong>{" "}
              and <strong className="strong">Node.js.</strong> My experience
              extends to working with{" "}
              <strong className="strong">PostgreSQL databases</strong>, where
              I've implemented complex data models and utilized{" "}
              <strong className="strong">Express.js</strong> for server-side
              development. With a strong foundation in computer science
              principles and a passion for crafting intuitive user interfaces, I
              am eager to contribute my expertise to innovative projects that
              push the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
