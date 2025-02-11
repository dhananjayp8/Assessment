import React from "react";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About PhronesisTech</h2>
          <p>
            PhronesisTech is a dynamic company founded in <span>2022</span>,
            offering innovative IT solutions, consulting, project, and product
            management services.
          </p>
          <p>
            With a dual presence in{" "}
            <span>Boston (USA) and Bangalore (India)</span>, we bring a global
            perspective to every project, ensuring the highest standards of
            delivery excellence across borders.
          </p>
          <p>
            As a service-based firm focused on business transformation and
            technology services, we are committed to making a positive impact
            for our customers by leveraging technology to unlock human
            potential.
          </p>
          <p className="highlight">
            Leading change requires{" "}
            <span>courage, innovation, focus, and collaboration</span>, and
            we’re here as your champions.
          </p>
        </div>

        <div className="about-image">
          <img src={about} alt="About Us" />
        </div>
      </div>
    </section>
  );
};

export default About;
