import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Mission() {
  const missionList = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/v2/D4E12AQEMi9NaS5U06g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691958095088?e=2147483647&v=beta&t=1jdHvE2pgEVXrP12ph9jR8evEAkNgUQ3TbyUQ_dOq4s",
      title: "Empower Through Innovation",
    },
    {
      id: 2,
      img: "https://www.theglobalrecruiter.com/wp-content/uploads/2020/04/global-leader-e1587725129452.jpg",
      title: "Global Recognition",
    },
    {
      id: 3,
      img: "https://cdn.prod.website-files.com/60e3caa50ec2a701bbf83598/6371b8fd63d653650f8ffa70_Blog%20cover%20photos-50-min.jpg",
      title: "Continuous Improvement",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{ padding: "2rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "800",
          color: "#3674b5",
          fontSize: "2rem",
          fontWeight: "800",
          padding: "1rem",
        }}
      >
        MISSION & VISION
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          margin: "1rem",
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
          <h2
            style={{ textAlign: "center", color: "#3674b5", fontWeight: "600" }}
          >
            MISSION
          </h2>
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
          <h2
            style={{ textAlign: "center", color: "#3674b5", fontWeight: "600" }}
          >
            VISION
          </h2>
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
