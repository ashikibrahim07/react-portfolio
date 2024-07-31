import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNode,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGears } from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <section id="skills">
      <p className="section__text__p1">Explore My</p>
      <h1 className="exp-title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>

            <div className="article-container">
              <article>
                <FontAwesomeIcon icon={faHtml5} className="exp-icon" />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faCss3Alt} className="exp-icon" />
                <div>
                  <h3>CSS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faBootstrap} className=" exp-icon" />
                <div>
                  <h3 className="boot">Bootstrap</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faJs} className="exp-icon" />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faReact} className="exp-icon" />
                <div>
                  <h3>React JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faGitAlt} className="exp-icon" />
                <FontAwesomeIcon icon={faGithub} className="exp-icon" />
                <div>
                  <h3>Git & GitHub</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>

            <div className="article-container">
              <article>
                <FontAwesomeIcon icon={faDatabase} className="exp-icon" />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faNode} className="exp-icon" />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <p className="ex">ex</p>
                <div>
                  <h3>Express JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <p className="ejs">&lt;%</p>
                <div>
                  <h3>Embedded JS</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faNpm} className="exp-icon" />

                <div>
                  <h3>NPM</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <FontAwesomeIcon icon={faGears} className="exp-icon" />

                <div>
                  <h3>RESTful APIs</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
