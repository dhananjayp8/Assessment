import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontWeight: "800", color: "#3674b5" }}>
        MISSION & VISION
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Mission Box */}
        <div
          data-aos="fade-left"
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "2rem",
            border: "2px solid #3674b5",
            borderRadius: "8px",
            background: "white",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#3674b5" }}>MISSION</h2>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            To empower businesses through innovative, reliable, and secure IT
            solutions that enhance operational efficiency and drive digital
            transformation.
          </p>
        </div>

        {/* Vision Box */}
        <div
          data-aos="fade-right"
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "2rem",
            border: "2px solid #3674b5",
            borderRadius: "8px",
            background: "white",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#3674b5" }}>VISION</h2>
          <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
            To be the leading provider of exceptional service solutions,
            recognized for our commitment to excellence, innovation, and
            customer satisfaction.
          </p>
        </div>
      </div>

      {/* Mission List */}
    </div>
  );
}
