// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo-icon.jpg";
// import "../App.css";

// const Navbar = ({ scrollToSection }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const styles = {
//     dropdownContainer: {
//       position: "relative",
//       cursor: "pointer",
//     },
//     dropdown: {
//       position: "absolute",
//       background: "white",
//       color: "#3674b5",
//       top: "100%",
//       left: 0,
//       padding: "10px",
//       listStyle: "none",
//       minWidth: "150px",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
//       borderRadius: "5px",
//     },
//   };
//   return (
//     <div className="navbar">
//       <div className="nav">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>

//         <div
//           className={`hamburger ${menuOpen ? "close" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           {/* <li>About</li>
//           <li>Mission</li>
//           <li>Offerings</li>
//           <li>Services</li>
//           <li>Contact</li> */}
//           <li>Home</li>

//           <li onClick={() => scrollToSection("offerings")}>Offerings</li>
//           <li>Industries</li>
//           {/* <li onClick={() => scrollToSection("mission")}>Mission</li> */}
//           {/* <li onClick={() => scrollToSection("services")}>Services</li> */}
//           <li
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//             style={styles.dropdownContainer}
//             className="service-dropdwn"
//           >
//             Services
//             {dropdownOpen && (
//               <ul style={styles.dropdown} className="dropdown-service">
//                 <li>IT consulting</li>
//                 <li>Software product development</li>
//                 <li>Custom apps</li>
//                 <li>Managed IT services</li>
//                 <li>Data integration</li>
//                 <li>DevOps</li>
//                 <li>IT Maintenance & Support</li>
//               </ul>
//             )}
//           </li>
//           <li onClick={() => scrollToSection("about")}>About</li>
//           <li onClick={() => scrollToSection("contact")}>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/logo-icon.jpg";
// import "../App.css";

// const Navbar = ({ scrollToSection }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const styles = {
//     dropdownContainer: {
//       position: "relative",
//       cursor: "pointer",
//     },
//     dropdown: {
//       position: "absolute",
//       background: "white",
//       color: "#3674b5",
//       top: "100%",
//       left: 0,
//       padding: "10px",
//       listStyle: "none",
//       minWidth: "200px",
//       boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
//       borderRadius: "5px",
//       display: "flex",
//       flexDirection: "column", // Ensures dropdown items appear vertically
//       gap: "8px",
//       zIndex: "9999",
//     },
//     dropdownItem: {
//       padding: "8px 12px",
//       cursor: "pointer",
//       transition: "background 0.3s",
//     },
//     dropdownItemHover: {
//       background: "#f0f0f0",
//     },
//   };

//   return (
//     <div className="navbar">
//       <div className="nav">
//         <div className="logo">
//           <img src={logo} alt="logo" />
//         </div>

//         <div
//           className={`hamburger ${menuOpen ? "close" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </div>

//         <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
//           <li>Home</li>
//           <li onClick={() => scrollToSection("offerings")}>Offerings</li>
//           <li>Industries</li>
//           <li
//             onMouseEnter={() => setDropdownOpen(true)}
//             onMouseLeave={() => setDropdownOpen(false)}
//             style={styles.dropdownContainer}
//             className="service-dropdwn"
//           >
//             Services
//             {dropdownOpen && (
//               <ul style={styles.dropdown} className="dropdown-service">
//                 <li style={styles.dropdownItem}>IT Consulting</li>
//                 <li style={styles.dropdownItem}>
//                   Software Product Development
//                 </li>
//                 <li style={styles.dropdownItem}>Custom Apps</li>
//                 <li style={styles.dropdownItem}>Managed IT Services</li>
//                 <li style={styles.dropdownItem}>Data Integration</li>
//                 <li style={styles.dropdownItem}>DevOps</li>
//                 <li style={styles.dropdownItem}>IT Maintenance & Support</li>
//               </ul>
//             )}
//           </li>
//           <li onClick={() => scrollToSection("about")}>About</li>
//           <li onClick={() => scrollToSection("contact")}>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo-icon.jpg";
import "../App.css";

const Navbar = ({ scrollToSection, setShowLottie }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const styles = {
    dropdownContainer: {
      position: "relative",
      cursor: "pointer",
      zIndex: 10000, // Ensure it's above other elements
    },
    dropdown: {
      position: "absolute",
      background: "white",
      color: "#3674b5",
      top: "100%",
      left: 0,
      padding: "10px",
      listStyle: "none",
      minWidth: "200px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      borderRadius: "5px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      zIndex: 10001, // Higher than About section
    },
    dropdownItem: {
      padding: "8px 12px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    dropdownItemHover: {
      background: "#f0f0f0",
    },
  };

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

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li onClick={() => scrollToSection("offerings")}>Offerings</li>
          <li>Industries</li>
          <li
            onMouseEnter={() => {
              setDropdownOpen(true);
              setShowLottie(false);
            }}
            onMouseLeave={() => {
              setDropdownOpen(false);
              setShowLottie(true);
            }}
            style={styles.dropdownContainer}
            className="service-dropdwn"
          >
            Services
            {dropdownOpen && (
              <ul style={styles.dropdown} className="dropdown-service">
                <li style={styles.dropdownItem}>IT Consulting</li>
                <li style={styles.dropdownItem}>
                  Software Product Development
                </li>
                <li style={styles.dropdownItem}>Custom Apps</li>
                <li style={styles.dropdownItem}>Managed IT Services</li>
                <li style={styles.dropdownItem}>Data Integration</li>
                <li style={styles.dropdownItem}>DevOps</li>
                <li style={styles.dropdownItem}>IT Maintenance & Support</li>
              </ul>
            )}
          </li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
