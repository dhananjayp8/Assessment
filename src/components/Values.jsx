import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  const chipList = [
    "CREDIBILITY",
    "COMPETENCE",
    "COMMITMENT",
    "CUSTOMER CENTRICITY",
    "CONTINUOUS IMPROVEMENT",
  ];

  return (
    <>
      <div
        style={{
          padding: "2rem",
          margin: "2rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "900",
            color: "#3674b5",
          }}
        >
          CORE VALUES
        </h1>
        <div
          className="chips-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            margin: "2rem",
          }}
        >
          {chipList.map((chip, index) => (
            <div
              key={index}
              className="chip"
              data-aos="fade-right"
              data-aos-delay={index * 200}
              style={{
                padding: "0.5rem 1rem",
                background: "#3674b5",
                color: "white",
                width: "200px",
                borderRadius: "20px",
                fontWeight: "bold",
                textAlign: "center",
                whiteSpace: "nowrap",
                fontSize: "0.8rem",
                fontWeight: "900",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Values;
