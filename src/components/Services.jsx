// import React from "react";

// const Services = () => {
//   return (
//     <>
//       <div className="services">
//         <h1>OUR SERVICES</h1>
//         <div className="service-container">
//           <div className="list">
//             <h1>DIGITAL EXPERIENCE</h1>
//             <ul>
//               <li>UX Design</li>
//               <li>Custom Software</li>
//               <li>Development</li>
//               <li>Application Development</li>
//               <li>Application Modernization</li>
//               <li>IoT & Connected Devices</li>
//               <li>Web 3.0 & XR</li>
//             </ul>
//           </div>
//           <div className="list">
//             <h1>DATA ENGINEERING &ANALYTICS</h1>
//             <ul>
//               <li>UX Design</li>
//               <li>Custom Software</li>
//               <li>Development</li>
//               <li>Application Development</li>
//             </ul>
//           </div>
//           <div className="list">
//             <h1>CLOUD & DEVOPS</h1>
//             <ul>
//               <li>Cloud Governance & FinOps</li>
//               <li>Migration & Modernization</li>
//               <li>DevOps Automation</li>
//               <li>Managed Services</li>
//               <li>Microsoft Azure</li>
//             </ul>
//           </div>
//           <div className="list">
//             <h1>PRODUCT ENGINEERING</h1>
//             <ul>
//               <li>Product Strategy</li>
//               <li>Product & Platform</li>
//               <li>Engineering</li>
//               <li>Architecture Advisory</li>
//               <li>Modernization</li>
//               <li>Managed Sustenance</li>
//             </ul>
//           </div>
//           <div className="list">
//             <h1>AI/ML</h1>
//             <ul>
//               <li>GenAI</li>
//               <li>Data Science</li>
//               <li>Machine Learning</li>
//               <li>MLOps</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

// const Services = () => {
//   const servicesContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     padding: "20px",
//     alignItems: "center",
//   };

//   const rowStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//     width: "100%",
//   };

//   const listStyle = {
//     flex: "1",
//     minWidth: "300px",
//     background: "#f5f5f5",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//   };

//   const listContainerStyle = {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "10px",
//   };

//   return (
//     <div style={servicesContainerStyle}>
//       <h1>OUR SERVICES</h1>

//       {/* First Row */}
//       <div style={rowStyle}>
//         <div style={listStyle}>
//           <h2>DIGITAL EXPERIENCE</h2>
//           <ul style={listContainerStyle}>
//             <li>UX Design</li>
//             <li>Custom Software</li>
//             <li>Development</li>
//             <li>Application Development</li>
//             <li>Application Modernization</li>
//             <li>IoT & Connected Devices</li>
//             <li>Web 3.0 & XR</li>
//           </ul>
//         </div>
//         <div style={listStyle}>
//           <h2>DATA ENGINEERING & ANALYTICS</h2>
//           <ul style={listContainerStyle}>
//             <li>UX Design</li>
//             <li>Custom Software</li>
//             <li>Development</li>
//             <li>Application Development</li>
//           </ul>
//         </div>
//       </div>

//       {/* Second Row */}
//       <div style={rowStyle}>
//         <div style={listStyle}>
//           <h2>CLOUD & DEVOPS</h2>
//           <ul>
//             <li>Cloud Governance & FinOps</li>
//             <li>Migration & Modernization</li>
//             <li>DevOps Automation</li>
//             <li>Managed Services</li>
//             <li>Microsoft Azure</li>
//           </ul>
//         </div>
//         <div style={listStyle}>
//           <h2>PRODUCT ENGINEERING</h2>
//           <ul>
//             <li>Product Strategy</li>
//             <li>Product & Platform</li>
//             <li>Engineering</li>
//             <li>Architecture Advisory</li>
//             <li>Modernization</li>
//             <li>Managed Sustenance</li>
//           </ul>
//         </div>
//         <div style={listStyle}>
//           <h2>AI/ML</h2>
//           <ul>
//             <li>GenAI</li>
//             <li>Data Science</li>
//             <li>Machine Learning</li>
//             <li>MLOps</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import { CgAdd } from "react-icons/cg";
const Services = () => {
  const servicesContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px",
    alignItems: "center",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
  };

  const listStyle = {
    flex: "1",
    Width: "300px",
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const listContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5px",
  };

  const listItemStyle = {
    marginBottom: "-7px",
    fontSize: "1rem",
    fontWeight: "200",

    // Reduced spacing between items
  };
  const head = {
    fontSize: "1.5rem",
    fontWeight: "700",
    textAlign: "left",
    marginLeft: "2rem",
  };

  return (
    <div style={servicesContainerStyle}>
      <h1 style={{ fontSize: "2rem", fontWeight: "900" }}>OUR SERVICES</h1>

      {/* First Row */}
      <div style={rowStyle}>
        <div style={listStyle}>
          <h2 style={head}>DIGITAL EXPERIENCE</h2>
          <ul style={listContainerStyle}>
            <li style={listItemStyle}>UX Design</li>
            <li style={listItemStyle}>Custom Software</li>
            <li style={listItemStyle}>Development</li>
            <li style={listItemStyle}>Application Development</li>
            <li style={listItemStyle}>Application Modernization</li>
            <li style={listItemStyle}>IoT & Connected Devices</li>
            <li style={listItemStyle}>Web 3.0 & XR</li>
          </ul>
        </div>
        <div style={listStyle}>
          <h2 style={head}>DATA ENGINEERING & ANALYTICS</h2>
          <ul style={listContainerStyle}>
            <li style={listItemStyle}>UX Design</li>
            <li style={listItemStyle}>Custom Software</li>
            <li style={listItemStyle}>Development</li>
            <li style={listItemStyle}>Application Development</li>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div style={rowStyle}>
        <div style={listStyle}>
          <h2 style={head}>CLOUD & DEVOPS</h2>
          <ul>
            <li style={listItemStyle}>Cloud Governance & FinOps</li>
            <li style={listItemStyle}>Migration & Modernization</li>
            <li style={listItemStyle}>DevOps Automation</li>
            <li style={listItemStyle}>Managed Services</li>
            <li style={listItemStyle}>Microsoft Azure</li>
          </ul>
        </div>
        <div style={listStyle}>
          <h2 style={head}>PRODUCT ENGINEERING</h2>
          <ul>
            <li style={listItemStyle}>Product Strategy</li>
            <li style={listItemStyle}>Product & Platform</li>
            <li style={listItemStyle}>Engineering</li>
            <li style={listItemStyle}>Architecture Advisory</li>
            <li style={listItemStyle}>Modernization</li>
            <li style={listItemStyle}>Managed Sustenance</li>
          </ul>
        </div>
        <div style={listStyle} className="last-service">
          <h2 style={head}>AI/ML</h2>
          <ul>
            <li style={listItemStyle}>GenAI</li>
            <li style={listItemStyle}>Data Science</li>
            <li style={listItemStyle}>Machine Learning</li>
            <li style={listItemStyle}>MLOps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
