// import React from "react";

// const KnowMore = () => {
//   return (
//     <>
//       <div
//         className="know-more"
//         style={{ borderBottom: "1px solid black", padding: "1rem 0" }}
//       >
//         <div className="know-more-container">
//           <div className="about-content">
//             <div className="left-about">
//               <div className="heading">
//                 <h1>GET TO KNOW US</h1>
//               </div>
//             </div>
//             <div
//               className="right-about"
//               style={{ borderTop: "1px solid black" }}
//             >
//               <p>
//                 <span
//                   style={{
//                     fontSize: "1.5rem",
//                     color: "#3674b5",
//                     fontWeight: 700,
//                   }}
//                 >
//                   PhronesisTech
//                 </span>{" "}
//                 is a dynamic IT solutions and consulting company,{" "}
//                 <span>founded in 2022</span>, specializing in project and
//                 product management services.
//               </p>
//               <p>
//                 With a strong presence in both{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   Boston (USA)
//                 </span>{" "}
//                 and{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   Bangalore (India)
//                 </span>
//                 , we bring a global perspective to every project, ensuring
//                 excellence in delivery across borders.
//               </p>
//               <p>
//                 As a{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   service-driven firm
//                 </span>{" "}
//                 focused on business transformation and technology services, we
//                 leverage cutting-edge technology to unlock human potential and
//                 create meaningful impact for our customers.
//               </p>
//               <p>
//                 Leading change demands courage, innovation, focus, and
//                 collaboration—and we stand by our clients as champions of
//                 transformation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default KnowMore;
// import React from "react";

// const KnowMore = () => {
//   return (
//     <>
//       <div
//         className="know-more"
//         style={{ borderBottom: "1px solid black", padding: "1rem 0" }}
//       >
//         <div className="know-more-container">
//           <div className="about-content">
//             <div className="left-about">
//               <div className="heading">
//                 <h1>GET TO KNOW US</h1>
//               </div>
//             </div>
//             <div
//               className="right-about"
//               style={{ borderTop: "1px solid black" }}
//             >
//               <p>
//                 <span
//                   style={{
//                     fontSize: "1.5rem",
//                     color: "#3674b5",
//                     fontWeight: 700,
//                   }}
//                 >
//                   PhronesisTech
//                 </span>{" "}
//                 is a dynamic IT solutions and consulting company,{" "}
//                 <span>founded in 2022</span>, specializing in project and
//                 product management services.
//               </p>
//               <p>
//                 With a strong presence in both{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   Boston (USA)
//                 </span>{" "}
//                 and{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   Bangalore (India)
//                 </span>
//                 , we bring a global perspective to every project, ensuring
//                 excellence in delivery across borders.
//               </p>
//               <p>
//                 As a{" "}
//                 <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
//                   service-driven firm
//                 </span>{" "}
//                 focused on business transformation and technology services, we
//                 leverage cutting-edge technology to unlock human potential and
//                 create meaningful impact for our customers.
//               </p>
//               <p>
//                 Leading change demands courage, innovation, focus, and
//                 collaboration—and we stand by our clients as champions of
//                 transformation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default KnowMore;
import React from "react";
import Lottie from "lottie-react";
import knowData from "../assets/know.json"; // Replace with your actual Lottie JSON file

const KnowMore = () => {
  return (
    <div
      className="know-more"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        // borderBottom: "1px solid black",
        padding: "2rem 0", // 🔹 Added spacing
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "900",
          color: "#3674b5",
        }}
      >
        KNOW ABOUT US
      </h1>
      <div
        className="know-more-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px", // 🔹 Space between animation & text
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Lottie Animation (Left Side) */}
        <div
          className="animation-container"
          style={{
            width: "45%",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
            padding: "20px", // 🔹 Padding for balance
          }}
        >
          <Lottie
            animationData={knowData}
            loop={true}
            style={{ width: "100%" }}
          />
        </div>

        {/* Right Content (Text Content) */}
        <div
          className="right-about"
          style={{
            // borderTop: "1px solid black",
            width: "50%",
            minWidth: "320px",
            padding: "20px", // 🔹 More padding for readability
          }}
        >
          <p>
            <span
              style={{
                fontSize: "1.5rem",
                color: "#3674b5",
                fontWeight: 700,
              }}
            >
              PhronesisTech
            </span>{" "}
            is a dynamic IT solutions and consulting company,{" "}
            <span>founded in 2022</span>, specializing in project and product
            management services.
          </p>
          <p>
            With a strong presence in both{" "}
            <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
              Boston (USA)
            </span>{" "}
            and{" "}
            <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
              Bangalore (India)
            </span>
            , we bring a global perspective to every project, ensuring
            excellence in delivery across borders.
          </p>
          <p>
            As a{" "}
            <span style={{ color: "#3674b5", fontSize: "1.2rem" }}>
              service-driven firm
            </span>{" "}
            focused on business transformation and technology services, we
            leverage cutting-edge technology to unlock human potential and
            create meaningful impact for our customers.
          </p>
          <p>
            Leading change demands courage, innovation, focus, and
            collaboration—and we stand by our clients as champions of
            transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
