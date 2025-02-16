import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// Icons for menu
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-icon.jpg"; // Replace with your actual logo path
import "../App.css"; // Import the CSS file

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div
          className={`hamburger ${menuOpen ? "close" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        <ul className={menuOpen ? "open" : ""}>
          {/* <li>About</li>
          <li>Mission</li>
          <li>Offerings</li>
          <li>Services</li>
          <li>Contact</li> */}
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("offerings")}>Offerings</li>
          <li onClick={() => scrollToSection("mission")}>Mission</li>
          {/* <li onClick={() => scrollToSection("services")}>Services</li> */}
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
