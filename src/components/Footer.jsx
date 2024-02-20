import React from "react";

function Footer() {
  function currentYear() {
    var getYear = new Date().getFullYear();
    return getYear;
  }
  const year = currentYear();
  return (
    <footer>
      <p id="copyRight">
        Copyright &#169; {year} Ashik Ibrahim S. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;
