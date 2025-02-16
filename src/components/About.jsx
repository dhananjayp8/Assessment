// import React, { useRef, useEffect } from "react";
// import hero from "../assets/hero.jpg";
// import Typed from "typed.js";
// import AOS from "aos";
// import { useRef, useEffect } from "react";
// import "aos/dist/aos.css";

// const About = ({ scrollToKnowMore }) => {
//   const typedRef = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedRef.current, {
//       strings: ["Start your journey with"],
//       typeSpeed: 50,
//       backSpeed: 30,
//       loop: true,
//       backDelay: 1500,
//       startDelay: 500,
//     });

//     return () => typed.destroy(); // Cleanup on unmount
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       easing: "ease-in-out", // Easing option
//       once: false, // Whether animation should happen only once
//     });
//   }, []);

//   return (
//     <section className="about-section">
//       <div className="about-container">
//         {/* About Text - Animate from Left */}
//         <div className="about-text" data-aos="fade-left">
//           <p style={{ fontSize: "2rem", fontWeight: "600" }}>
//             <span ref={typedRef}></span>{" "}
//             <span style={{ color: "#0BBF53" }}></span> <br />
//             <span
//               style={{
//                 fontSize: "3.5rem",
//                 fontWeight: "900",
//                 color: "#3674b5",
//               }}
//             >
//               PhronesisTech
//             </span>
//           </p>
//           <button
//             style={{ backgroundColor: "#3674b5" }}
//             onClick={scrollToKnowMore}
//             className="btn"
//           >
//             Know More
//           </button>
//         </div>

//         {/* About Image - Animate from Right */}
//         <div className="about-image" data-aos="fade-right">
//           <img src={hero} alt="About Us" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import Lottie from "lottie-react";
import Typed from "typed.js";
import AOS from "aos";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import animationData from "../assets/animationData.json"; // Replace with your Lottie JSON file

const About = ({ scrollToKnowMore }) => {
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
    <section className="about-section" style={{ padding: "4rem 0" }}>
      <div
        className="about-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          flexWrap: "wrap",
        }}
      >
        {/* About Text - Animate from Left */}
        <div
          className="about-text"
          data-aos="fade-left"
          style={{
            width: "35%",
            textAlign: "left",
          }}
        >
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
          <button
            style={{
              backgroundColor: "#3674b5",
              color: "white",
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={scrollToKnowMore}
            className="btn"
          >
            Know More
          </button>
        </div>

        {/* Lottie Animation - Animate from Right */}
        <div
          className="about-animation"
          data-aos="fade-right"
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default About;
