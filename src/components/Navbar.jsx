import React from "react";
import "../App.css";
import logo from "../assets/Logo.png";
import Button from "react-bootstrap/Button";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <ul>
              <li>About</li>
              <li>Mission</li>
              <li>Offerings</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
