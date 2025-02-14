import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// Icons for menu
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/Logo.png"; // Replace with your actual logo path
import "../App.css"; // Import the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    // <div className="navbar">
    //   <div className="nav">
    //     {/* Logo */}
    //     <div className="logo">
    //       <img src={logo} alt="logo" />
    //     </div>

    //     {/* Hamburger Icon (Visible Only on Mobile) */}
    //     <div className="hamburger" onClick={toggleMenu}>
    //       {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
    //     </div>

    //     {/* Navigation Links */}
    //     <ul className={`nav-links ${isOpen ? "open" : ""}`}>
    //       <li>About</li>
    //       <li>Mission</li>
    //       <li>Offerings</li>
    //       <li>Services</li>
    //       <li>Contact</li>
    //     </ul>
    //   </div>
    // </div>
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon (Menu Open/Close Toggle) */}
        <div
          className={`hamburger ${menuOpen ? "close" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "open" : ""}>
          <li>About</li>
          <li>Mission</li>
          <li>Offerings</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
