import React from "react";

function ContactLinks() {
  return (
    <section className="section-wrap content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="eyebrow">06 /</p>
        <h2 id="contact-title">say hi</h2>
      </div>
      <p className="contact-copy">i'm always down to talk about interesting software, games, weird ideas, or things we should probably build.</p>
      <div className="text-links contact-links">
        <a href="mailto:baani@nyu.edu">email <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/baani-kaur-pasrija-84aa3216b/" target="_blank" rel="noreferrer">linkedin <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/zeepxnflrp" target="_blank" rel="noreferrer">github <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

export default ContactLinks;
