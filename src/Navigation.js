import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";
import React from "react";

function Navigation() {
  return (
    <nav className="navStyle">
      <div className="brandContainerStyle">
        <img className="logo" alt="" src="/React.png" width="30" height="30" />{" "}
        <div className="brandStyle">React Bootstrap</div>
        <div className="linkStyle">Getting Started</div>
        <div className="linkStyle marginLeft">Components</div>
      </div>
      <div className="rightContainer">
        <NavDropdown
          title="v2.10.0 (Bootstrap 5)"
          id="basic-nav-dropdown"
          className="marginRight"
        >
          <NavDropdown.Item href="#action/1">
            v1.6.1 (Bootstrap 4)
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/2">
            v0.33.1 (Bootstrap 3)
          </NavDropdown.Item>
        </NavDropdown>
        <a href="https://github.com" className="linkStyle marginRight">
          GitHub
        </a>
        <button className="searchButton">Search</button>
      </div>
    </nav>
  );
}
export default Navigation;
