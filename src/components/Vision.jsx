import React from "react";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  const typedRef = useRef(null);
  const missionList = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/v2/D4E12AQEMi9NaS5U06g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691958095088?e=2147483647&v=beta&t=1jdHvE2pgEVXrP12ph9jR8evEAkNgUQ3TbyUQ_dOq4s",
      title: "Talent You Can Trust",
    },
    {
      id: 2,
      img: "https://www.theglobalrecruiter.com/wp-content/uploads/2020/04/global-leader-e1587725129452.jpg",
      title: "Delivering Exceptiona Results",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Build Reliability & Resilience",
    },
  ];
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "To be the leading provider of exceptional service solutions, recognized for our commitment to excellence,innovation and customer satisfaction",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      startDelay: 500,
    });

    return () => typed.destroy(); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="mission" data-aos="fade-left">
        <h1 style={{ marginLeft: "6rem", fontWeight: "800", color: "#3674b5" }}>
          VISION
        </h1>
        <div className="row-mission">
          <div className="mission-card">
            <h5
              className="card-title"
              style={{ fontSize: "1.6rem", marginLeft: "8rem" }}
            >
              Our Vision
            </h5>
            <p
              className="card-text"
              style={{ fontSize: "1.2rem", marginLeft: "8rem" }}
            >
              <span ref={typedRef}></span>
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div
          className="mission-card-img"
          data-aos="fade-left"
          style={{ display: "flex", flexWrap: "wrap", marginLeft: "14rem" }}
        >
          {missionList.map((item) => (
            <div className="card" key={item.id} style={{ cursor: "pointer" }}>
              <div className="card-image-container">
                <img src={item.img} className="card-img-top" alt="Card image" />
                <div className="card-overlay">
                  <h5 className="card-title" style={{ color: "white" }}>
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;
