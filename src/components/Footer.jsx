import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  function currentYear() {
    var getYear = new Date().getFullYear();
    return getYear;
  }
  const year = currentYear();
  return (
    <section id="footer">
      <footer>
        <p>
          Coded in <b>Visual Studio Code</b>. Built with <b>React.js</b> and
          <b> Material UI</b>, deployed with <b>GitHub pages</b>.
        </p>
        <br />
        <p id="copyRight">
          Copyright &#169; {year} <b>Ashik Ibrahim S</b>. All Rights Reserved.
          <Tooltip title="Back to Top">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="up-arrow arrow"
              onClick={() => (window.location.href = "./#desktop-nav")}
            />
          </Tooltip>
        </p>
      </footer>
    </section>
  );
}
export default Footer;
