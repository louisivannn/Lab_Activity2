import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="column">
        <h3 className="name">Docs</h3>
        <a href="">Getting Started</a>
        <a href="">Layout</a>
        <a href="">Forms</a>
        <a href="">Components</a>
        <a href="">Utilities</a>
      </div>
      <div className="column">
        <h3 className="name"> Community</h3>
        <a href="">Stack Overflow</a>
        <a href="">Discord</a>
      </div>
      <div className="column">
        <h3 className="name">More</h3>
        <a href="">Github</a>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p>
      </div>
    </footer>
  );
}

export default Footer;
