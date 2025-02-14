// import React, { useRef, useEffect } from "react";
import hero from "../assets/hero.jpg";
import Typed from "typed.js";
import AOS from "aos";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Start your journey with"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      startDelay: 500,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing option
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* About Text - Animate from Left */}
        <div className="about-text" data-aos="fade-left">
          <p style={{ fontSize: "2rem", fontWeight: "600" }}>
            <span ref={typedRef}></span>{" "}
            <span style={{ color: "#0BBF53" }}></span> <br />
            <span
              style={{
                fontSize: "3.5rem",
                fontWeight: "900",
                color: "#3674b5",
              }}
            >
              PhronesisTech
            </span>
          </p>
          <button>Know More</button>
        </div>

        {/* About Image - Animate from Right */}
        <div className="about-image" data-aos="fade-right">
          <img src={hero} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
