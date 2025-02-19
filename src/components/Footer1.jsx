import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
//import { CiFacebook } from "react-icons/ci";
// import { FaFacebook } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer1 = () => {
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Offerings</li>
            <li>Industries</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="center-footer">
          <h2>Follow us</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  size={30}
                  color="white"
                  style={{
                    backgroundColor: "#3b5998",
                    padding: "5px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-footer">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <a href="mailto:contact@phronesistech.com">
                sales@phronesistech.io
              </a>
            </li>
            <li>
              <a href="mailto:crm@phronesistech.io">crm@phronesistech.io</a>
            </li>
            <li>5, Palmer Lane Acton, MA, 01720, USA</li>
            <li>125, NCC Urban Green Province, Sarjapura,</li>
            <li>Bengaluru 562125</li>
          </ul>
        </div>
      </div>
      <div
        className="last-footer"
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "1rem",
          fontWeight: "700",
          backgroundColor: "#0755aa",
          padding: "2rem",
        }}
      >
        <h3 style={{ color: "white" }}>
          &copy; PhronesisTech. All Rights reserved.
        </h3>
      </div>
    </>
  );
};

export default Footer1;
