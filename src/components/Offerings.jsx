// import React from "react";
// import Slider from "react-slick";
// import {
//   FaJava,
//   FaPython,
//   FaSalesforce,
//   FaAws,
//   FaAtlassian,
//   FaGithub,
// } from "react-icons/fa";
// import { SiDotnet, SiTalend } from "react-icons/si";
// import { VscAzure } from "react-icons/vsc";
// import { GrOracle } from "react-icons/gr";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import footer from "../assets/footer.jpg";
// import offer from "../assets/offer.jpeg";
// // Salesforce ?
// // AWS
// // Azure
// // Web development (.NET, Java, Python)
// // Oracle Apps/Fusion
// // NetSuite
// // Microsoft Technology stack
// // Boomi
// // Talend
// // Power BI
// // Atlassian (Jira, Bitbucket)
// // GitHub
// const boomiLogo = "https://boomi.com/wp-content/uploads/social-media-icon.png";
// const netsuiteLogo = "https://cdn.worldvectorlogo.com/logos/netsuite.svg";
// const powerBiLogo = "https://img.icons8.com/ios7/512/power-bi.png";

// const BoomiIcon = () => (
//   <img src={boomiLogo} alt="Boomi" width="100" height="150" />
// );
// const NetSuiteIcon = () => (
//   <img src={netsuiteLogo} alt="NetSuite" width="64" height="64" />
// );
// const PowerBiIcon = () => (
//   <img src={powerBiLogo} alt="Power BI" width="64" height="64" />
// );

// const icons = [
//   { id: 1, icon: <FaSalesforce /> },
//   { id: 2, icon: <FaAws /> },
//   { id: 3, icon: <VscAzure /> },
//   { id: 4, icon: <SiDotnet /> },
//   { id: 5, icon: <FaJava /> },
//   { id: 6, icon: <FaPython /> },
//   { id: 7, icon: <GrOracle /> },
//   { id: 8, icon: <BoomiIcon /> },
//   { id: 9, icon: <NetSuiteIcon /> },
//   { id: 10, icon: <SiTalend /> },
//   { id: 11, icon: <PowerBiIcon /> },
//   { id: 12, icon: <FaAtlassian /> },
//   { id: 13, icon: <FaGithub /> },
// ];
// const Offerings = () => {
// const settings = {
//   infinite: true,
//   speed: 1500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   autoplay: true,
//   arrows: false,
//   autoplaySpeed: 1000,
//   cssEase: "linear",
//   pauseOnHover: false,
// };
//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     height: "100vh",
//   };

//   const listContainerStyle = {
//     display: "flex",
//     gap: "50px",
//   };

//   const listStyle = {
//     listStyle: "none",
//     padding: "0",
//     margin: "0",
//     textAlign: "center",
//   };

//   const listItemStyle = {
//     margin: "4px 0",
//     fontSize: "16px",
//   };

//   const headingStyle = {
//     fontSize: "24px",
//     fontWeight: "bold",
//     marginBottom: "10px",
//   };
//   return (
//     <>
//       <div
//         className="slide-main-container"
//         style={{
//           textAlign: "center",
//           padding: "40px 20px",
//           padding: "40px 20px",
//           backgroundImage: `url(${offer})`, // Replace with your image URL
//           backgroundSize: "cover",
//           opacity: "0.8",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           color: "white",
//           zIndex: -1,
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "3rem",
//             fontWeight: "900",
//             textAlign: "center",
//             // color: "#3674b5",
//             color: "white",
//           }}
//         >
//           OUR OFFERINGS
//         </h1>
// <div className="slider-container">
//   <h1 style={{ color: "white" }}>Technologies</h1>
//   <div
//     className="slider"
//     style={{
//       width: "80%",
//       margin: "auto",
//       textAlign: "center",
//       zIndex: 1,
//     }}
//   >
//     <Slider {...settings}>
//       {icons.map((item) => (
//         <div key={item.id} style={{ textAlign: "center" }}>
//           <div
//             style={{
//               fontSize: "4rem",
//               color: "#61dafb",
//               padding: "20px",
//             }}
//           >
//             {item.icon}
//           </div>
//           <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
//             {item.name}
//           </p>
//         </div>
//       ))}
//     </Slider>
//   </div>
//           <div className="offer">
//             <div className="offer-container">
//               <div className="list">
//                 <h1
//                   style={{
//                     textAlign: "center",
//                     fontSize: "1.5rem",
//                     fontWeight: "700",
//                     color: "white",
//                   }}
//                   className="head-list"
//                 >
//                   SERVICES
//                 </h1>
//                 <div
//                   className="list-cont"
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     gap: "50px",
//                   }}
//                 >
//                   {/* Left Column */}
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: "0",
//                       textAlign: "center",
//                       color: "white",
//                     }}
//                   >
//                     <li>IT consulting</li>
//                     <li>Software product development</li>
//                     <li>Building custom apps (Mobile/Web apps)</li>
//                     <li>Managed IT services</li>
//                   </ul>

//                   {/* Right Column */}
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: "0",
//                       textAlign: "left",
//                     }}
//                   >
//                     <li>Data integration</li>
//                     <li>DevOps</li>
//                     <li>IT Maintenance & Support</li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="list">
//                 <h1
//                   style={{
//                     textAlign: "center",
//                     fontSize: "1.5rem",
//                     fontWeight: "700",
//                     color: "white",
//                   }}
//                   className="head-list"
//                 >
//                   SOLUTIONS
//                 </h1>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     gap: "50px",
//                     cursor: "pointer",
//                   }}
//                   className="list-cont"
//                 >
//                   {/* Left Column */}
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: "0",
//                       textAlign: "right",
//                     }}
//                   >
//                     <li>CRM</li>
//                     <li>Data analytics & BI</li>
//                     <li>Cloud</li>
//                     <li>ERP</li>
//                     <li>Business process management</li>
//                     <li>eLearning</li>
//                   </ul>

//                   {/* Right Column */}
//                   <ul
//                     style={{
//                       listStyle: "none",
//                       padding: "0",
//                       textAlign: "left",
//                     }}
//                   >
//                     <li>Digital commerce</li>
//                     <li>Portals</li>
//                     <li>Artificial intelligence</li>
//                     <li>Cyber security</li>
//                     <li>Internet of Things</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Offerings;
// import React from "react";
// import Slider from "react-slick";
// import {
//   FaJava,
//   FaPython,
//   FaSalesforce,
//   FaAws,
//   FaAtlassian,
//   FaGithub,
// } from "react-icons/fa";
// import { SiDotnet, SiTalend } from "react-icons/si";
// import { VscAzure } from "react-icons/vsc";
// import { GrOracle } from "react-icons/gr";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import offer from "../assets/offer.jpeg";

// const boomiLogo = "https://boomi.com/wp-content/uploads/social-media-icon.png";
// const netsuiteLogo = "https://cdn.worldvectorlogo.com/logos/netsuite.svg";
// const powerBiLogo = "https://img.icons8.com/ios7/512/power-bi.png";

// const BoomiIcon = () => (
//   <img src={boomiLogo} alt="Boomi" className="tech-icon" />
// );
// const NetSuiteIcon = () => (
//   <img src={netsuiteLogo} alt="NetSuite" className="tech-icon" />
// );
// const PowerBiIcon = () => (
//   <img src={powerBiLogo} alt="Power BI" className="tech-icon" />
// );

// const icons = [
//   { id: 1, icon: <FaSalesforce /> },
//   { id: 2, icon: <FaAws /> },
//   { id: 3, icon: <VscAzure /> },
//   { id: 4, icon: <SiDotnet /> },
//   { id: 5, icon: <FaJava /> },
//   { id: 6, icon: <FaPython /> },
//   { id: 7, icon: <GrOracle /> },
//   { id: 8, icon: <BoomiIcon /> },
//   { id: 9, icon: <NetSuiteIcon /> },
//   { id: 10, icon: <SiTalend /> },
//   { id: 11, icon: <PowerBiIcon /> },
//   { id: 12, icon: <FaAtlassian /> },
//   { id: 13, icon: <FaGithub /> },
// ];

// const Offerings = () => {
//   const settings = {
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: false,
//     autoplaySpeed: 1000,
//     cssEase: "linear",
//     pauseOnHover: false,
//   };

//   return (
//     <div
//       className="offerings-container"
//       style={{
//         textAlign: "center",
//         padding: "40px 20px",
//         // backgroundImage: `url(${offer})`,
//         backgroundSize: "cover",
//         opacity: "0.8",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         color: "white",
//       }}
//     >
//       <h1 style={{ fontSize: "3rem", fontWeight: "900", color: "white" }}>
//         OUR OFFERINGS
//       </h1>

//       {/* Technologies Slider */}
//       <div className="slider-container">
//         <h1 style={{ color: "white", textAlign: "left", marginLeft: "10%" }}>
//           Technologies
//         </h1>
//         {/* <div
//           className="slider"
//           style={{ width: "80%", margin: "auto", textAlign: "center" }}
//         >
//           <Slider {...settings}>
//             {icons.map((item) => (
//               <div key={item.id} style={{ textAlign: "center" }}>
//                 <div
//                   style={{
//                     fontSize: "4rem",
//                     color: "#61dafb",
//                     padding: "20px",
//                   }}
//                 >
//                   {item.icon}
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div> */}
//       </div>

//       {/* Services & Solutions */}
//       <div
//         className="offer-container"
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           marginTop: "40px",
//           // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           border: "1px solid black",
//         }}
//       >
//         {/* Services */}
//         <div className="list" style={{ flex: "1 1 400px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "700",
//               color: "Black",
//               marginBottom: "10px",
//               textAlign: "center",
//             }}
//           >
//             SERVICES
//           </h1>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: "0",
//               textAlign: "left",
//               color: "white",
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "20px",
//               margin: "2rem",
//             }}
//           >
//             {[
//               "IT consulting",
//               "Software product development",
//               "Building custom apps (Mobile/Web apps)",
//               "Managed IT services",
//               "Data integration",
//               "DevOps",
//               "IT Maintenance & Support",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 style={{
//                   flex: "1 1 calc(50% - 10px)",
//                   fontSize: "1.2rem",
//                   fontWeight: "500",
//                   padding: "1.3rem",
//                 }}
//               >
//                 &rarr; &nbsp;{item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Solutions */}
//         <div className="list" style={{ flex: "1 1 400px", textAlign: "left" }}>
//           <h1
//             style={{
//               fontSize: "1.5rem",
//               fontWeight: "700",
//               color: "white",
//               marginBottom: "10px",
//             }}
//           >
//             SOLUTIONS
//           </h1>
//           <ul
//             style={{
//               listStyle: "none",
//               padding: "0",
//               textAlign: "left",
//               color: "white",
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "20px",
//             }}
//           >
//             {[
//               "CRM",
//               "Data analytics & BI",
//               "Cloud",
//               "ERP",
//               "Business process management",
//               "eLearning",
//               "Digital commerce",
//               "Portals",
//               "Artificial intelligence",
//               "Cyber security",
//               "Internet of Things",
//             ].map((item, index) => (
//               <li key={index} style={{ flex: "1 1 calc(50% - 10px)" }}>
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;
import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaAws, FaGithub } from "react-icons/fa";
import { SiDotnet, SiTalend } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";
// import "./Offerings.css"; // Import CSS

const Offerings = () => {
  return (
    <div className="offerings-container">
      <h1 className="heading" style={{ color: "#3674b5" }}>
        OUR OFFERINGS
      </h1>

      <div className="offerings-wrapper">
        {/* Services Section */}
        <div className="offerings-section">
          <h2 className="sub-heading">SERVICES</h2>
          <ul className="offerings-list">
            {[
              "IT consulting",
              "Software product development",
              "Custom apps",
              "Managed IT services",
              "Data integration",
              "DevOps",
              "IT Maintenance & Support",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="offerings-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                &rarr; {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Solutions Section */}
        <div className="offerings-section">
          <h2 className="sub-heading">SOLUTIONS</h2>
          <ul className="offerings-list">
            {[
              "CRM",
              "Data analytics & BI",
              "Cloud",
              "ERP",
              "Business process management",
              "eLearning",
              "Digital commerce",
              "Portals",
              "AI",
              "Cyber security",
              "IoT",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="offerings-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                &rarr; {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
