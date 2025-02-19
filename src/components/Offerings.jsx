// import React from "react";
// import { motion } from "framer-motion";
// import { FaJava, FaPython, FaAws, FaGithub } from "react-icons/fa";
// import { SiDotnet, SiTalend } from "react-icons/si";
// import { VscAzure } from "react-icons/vsc";
// import { GrOracle } from "react-icons/gr";
// const Offerings = () => {
//   return (
//     <div className="offerings-container">
//       <h1 className="heading" style={{ color: "#3674b5" }}>
//         OUR OFFERINGS
//       </h1>

//       <div className="offerings-wrapper">
//         {/* Services Section */}
//         <div className="offerings-section">
//           <h2 className="sub-heading">SERVICES</h2>
//           <ul className="offerings-list">
//             {[
//               "IT consulting",
//               "Software product development",
//               "Custom apps",
//               "Managed IT services",
//               "Data integration",
//               "DevOps",
//               "IT Maintenance & Support",
//             ].map((item, index) => (
//               <motion.li
//                 key={index}
//                 className="offerings-item"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 &rarr; {item}
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* Solutions Section */}
//         <div className="offerings-section">
//           <h2 className="sub-heading">SOLUTIONS</h2>
//           <ul className="offerings-list">
//             {[
//               "CRM",
//               "Data analytics & BI",
//               "Cloud",
//               "ERP",
//               "Business process management",
//               "eLearning",
//               "Digital commerce",
//               "Portals",
//               "AI",
//               "Cyber security",
//               "IoT",
//             ].map((item, index) => (
//               <motion.li
//                 key={index}
//                 className="offerings-item"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 &rarr; {item}
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Offerings = () => {
//   const [hovered, setHovered] = useState(null);

//   const services = [
//     "IT consulting",
//     "Software product development",
//     "Custom apps",
//     "Managed IT services",
//     "Data integration",
//     "DevOps",
//     "IT Maintenance & Support",
//   ];

//   const solutions = [
//     "CRM",
//     "Data analytics & BI",
//     "Cloud",
//     "ERP",
//     "Business process management",
//     "eLearning",
//     "Digital commerce",
//     "Portals",
//     "AI",
//     "Cyber security",
//     "IoT",
//   ];

//   return (
//     <div className="offerings-container">
//       <h1
//         className="heading"
//         style={{ color: "#3674b5", fontSize: "2.2rem", fontWeight: "800" }}
//       >
//         OUR OFFERINGS
//       </h1>

//       <div className="offerings-wrapper">
//         {/* Services Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("services")}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <h2 className="sub-heading">SERVICES</h2>
//           {hovered === "services" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {services.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>

//         {/* Solutions Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("solutions")}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <h2 className="sub-heading">SOLUTIONS</h2>
//           {hovered === "solutions" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {solutions.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Offerings = () => {
//   const [hovered, setHovered] = useState(null);

//   const services = [
//     "IT consulting",
//     "Software product development",
//     "Custom apps",
//     "Managed IT services",
//     "Data integration",
//     "DevOps",
//     "IT Maintenance & Support",
//   ];

//   const solutions = [
//     "CRM",
//     "Data analytics & BI",
//     "Cloud",
//     "ERP",
//     "Business process management",
//     "eLearning",
//     "Digital commerce",
//     "Portals",
//     "AI",
//     "Cyber security",
//     "IoT",
//   ];

//   return (
//     <div className="offerings-container">
//       <h1
//         className="heading"
//         style={{ color: "#3674b5", fontSize: "2.2rem", fontWeight: "800" }}
//       >
//         OUR OFFERINGS
//       </h1>

//       <div className="offerings-wrapper">
//         {/* Services Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("services")}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <h2 className="sub-heading">SERVICES</h2>
//           {hovered === "services" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {services.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>

//         {/* Solutions Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("solutions")}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <h2 className="sub-heading">SOLUTIONS</h2>
//           {hovered === "solutions" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {solutions.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Offerings = () => {
//   const [hovered, setHovered] = useState(null);

//   const services = [
//     "IT consulting",
//     "Software product development",
//     "Custom apps",
//     "Managed IT services",
//     "Data integration",
//     "DevOps",
//     "IT Maintenance & Support",
//   ];

//   const solutions = [
//     "CRM",
//     "Data analytics & BI",
//     "Cloud",
//     "ERP",
//     "Business process management",
//     "eLearning",
//     "Digital commerce",
//     "Portals",
//     "AI",
//     "Cyber security",
//     "IoT",
//   ];

//   return (
//     <div className="offerings-container">
//       <h1
//         className="heading"
//         style={{ color: "#3674b5", fontSize: "2.2rem", fontWeight: "800" }}
//       >
//         OUR OFFERINGS
//       </h1>

//       <div className="offerings-wrapper">
//         {/* Services Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("services")}
//           onMouseLeave={() => setHovered(null)}
//           style={{
//             height: hovered === "services" ? "auto" : "0",
//             overflow: "hidden",
//             transition: "height 0.3s ease",
//           }}
//         >
//           <h2 className="sub-heading">SERVICES</h2>
//           {hovered === "services" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {services.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>

//         {/* Solutions Section */}
//         <div
//           className="offerings-box"
//           onMouseEnter={() => setHovered("solutions")}
//           onMouseLeave={() => setHovered(null)}
//           style={{
//             height: hovered === "solutions" ? "auto" : "0",
//             overflow: "hidden",
//             transition: "height 0.3s ease",
//           }}
//         >
//           <h2 className="sub-heading">SOLUTIONS</h2>
//           {hovered === "solutions" && (
//             <motion.ul
//               className="offerings-list"
//               style={{ textAlign: "left" }}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//             >
//               {solutions.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   className="offerings-item"
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   &rarr; {item}
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;
import React, { useState } from "react";

const services = [
  "IT Consulting",
  "Software Product Development",
  "Custom Apps",
  "Managed IT Services",
  "Data Integration",
  "DevOps",
  "IT Maintenance & Support",
];

const solutions = [
  "CRM",
  "Data Analytics & BI",
  "Cloud",
  "ERP",
  "Business Process Management",
  "eLearning",
  "Digital Commerce",
  "Portals",
  "AI",
  "Cyber Security",
  "IoT",
];

const ServicesList = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div
      className="services-container"
      style={{ textAlign: "center", padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => handleClick("services")}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "16px",
            backgroundColor: activeTab === "services" ? "#3674b5" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#3674b5",
            fontWeight: "600",
          }}
        >
          SERVICES
        </button>
        <button
          onClick={() => handleClick("solutions")}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "16px",
            backgroundColor: activeTab === "solutions" ? "#3674b5" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#3674b5",
          }}
        >
          SOLUTIONS
        </button>
      </div>
      {activeTab && (
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {(activeTab === "services" ? services : solutions).map(
            (item, index) => (
              <button
                key={index}
                style={{
                  width: "200px",
                  height: "50px",
                  fontSize: "16px",
                  backgroundColor: "#f0f0f0",
                  color: "#333",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ServicesList;
