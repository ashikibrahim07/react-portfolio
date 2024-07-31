import React from "react";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="cnt-title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <button
            className="mail"
            onClick={() =>
              (window.location.href = "mailto:ashikibrahim7777@gmail.com")
            }
          >
            Say Hello
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
