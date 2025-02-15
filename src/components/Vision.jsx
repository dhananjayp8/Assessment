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
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg",
      title: "Talent You Can Trust",
    },
    {
      id: 2,
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg",
      title: "Delivering Exceptiona Results",
    },
    {
      id: 3,
      img: "https://softlinkglobal.com/wp-content/uploads/2021/11/Why-Technology-is-a-reliable-partner-in-your-journey-to-logistics-success.webp",
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
              Our Vision :-
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
