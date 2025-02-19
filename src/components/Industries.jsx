// import React from "react";
// import Slider from "react-slick";
// const Industries = () => {

//   const imageList = [
//     {
//       id: 1,
//       title: "Healthcare & Life Sciences",
//       src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
//       desc: "Innovative solutions to streamline patient care and medical record management.",
//     },
//     {
//       id: 2,
//       title: "E-commerce & Retail",
//       src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
//       desc: "Robust platforms for online retail, inventory management, and customer engagement.",
//     },
//     {
//       id: 3,
//       title: "Supply Chain & Logistics",
//       src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
//       desc: "Revolutionizing the movement of goods through efficient, agile, and innovative supply chain and logistics solutions.",
//     },
//     {
//       id: 4,
//       title: "Financial Services",
//       src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
//       desc: "Secure and efficient systems for banking, investment, and financial analysis.",
//     },
//     {
//       id: 5,
//       title: "Technology Sector",
//       src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
//       desc: "Shaping the future by driving transformation through cutting-edge digital solutions and innovative technologies.",
//     },
//   ];

//   console.log(imageList);

//   return (
//     <>

//       <div className="ind" style={{ marginTop: "4rem" }}>
//         <h1
//           style={{
//             fontSize: "2rem",
//             fontWeight: "800",
//             textAlign: "center",
//             marginBottom: "1.5rem",
//             color: "#3674b5",
//           }}
//         >
//           INDUSTRIES WE SERVE
//         </h1>

//         <div className="card-ind-container">
//           {imageList.map((item, key) => (
//             <div className="ind-card" key={item.id}>
//               <img src={item.src} />
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Industries;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import offer from "../assets/temp1.jpg";
// const Industries = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration
//       once: false, // Allows animation to replay when scrolling up
//       mirror: true, // Animation runs every time it appears in viewport
//     });
//   }, []);

//   const imageList = [
//     {
//       id: 1,
//       title: "Healthcare & Life Sciences",
//       src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
//       desc: "Innovative solutions to streamline patient care and medical record management.",
//     },
//     {
//       id: 2,
//       title: "E-commerce & Retail",
//       src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
//       desc: "Robust platforms for online retail, inventory management, and customer engagement.",
//     },
//     {
//       id: 3,
//       title: "Supply Chain & Logistics",
//       src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
//       desc: "Revolutionizing the movement of goods through efficient, agile, and innovative supply chain and logistics solutions.",
//     },
//     {
//       id: 4,
//       title: "Financial Services",
//       src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
//       desc: "Secure and efficient systems for banking, investment, and financial analysis.",
//     },
//     {
//       id: 5,
//       title: "Technology Sector",
//       src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
//       desc: "Shaping the future by driving transformation through cutting-edge digital solutions and innovative technologies.",
//     },
//   ];

//   return (
//     <div
//       className="ind"
//       style={{
//         marginTop: "4rem",
//         backgroundImage: `url(${offer})`, // Add your image URL here
//         backgroundSize: "cover", // Make the image cover the entire div
//         backgroundPosition: "center", // Center the background image
//         backgroundRepeat: "no-repeat",
//         // opacity: "0.85",
//         // zIndex: "-1",
//       }}
//     >
//       <h1
//         style={{
//           fontSize: "2.2rem",
//           fontWeight: "900",
//           textAlign: "center",
//           marginBottom: "1.5rem",
//           // color: "white",
//           zIndex: "10",
//           textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
//         }}
//       >
//         INDUSTRIES WE SERVE
//       </h1>

//       <div className="card-ind-container">
//         {imageList.map((item, index) => (
//           <div
//             className="ind-card"
//             key={item.id}
//             data-aos="fade-left"
//             data-aos-delay={index * 200}
//             style={{
//               border: "1px solid black",
//               marginBottom: "1.5rem",
//               zIndex: "3",
//               backgroundColor: "#3674b5",
//               // textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
//             }}
//             // Delays each card animation for a smooth effect
//           >
//             <img src={item.src} alt={item.title} />
//             <h3
//               style={{
//                 color: "white",
//                 fontSize: "1.1rem",
//                 fontWeight: "700",
//                 // textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
//               }}
//             >
//               {item.title}
//             </h3>
//             <p
//               style={{
//                 color: "white",
//                 fontSize: "0.8rem",
//                 fontWeight: "700",
//                 // textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
//               }}
//             >
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import offer from "../assets/temp1.jpg";

// const Industries = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true, // Animation runs every time it appears in viewport
//     });
//   }, []);

//   const imageList = [
//     {
//       id: 1,
//       title: "Healthcare & Life Sciences",
//       src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
//       desc: "Innovative solutions to streamline patient care and medical record management.",
//     },
//     {
//       id: 2,
//       title: "E-commerce & Retail",
//       src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
//       desc: "Robust platforms for online retail, inventory management, and customer engagement.",
//     },
//     {
//       id: 3,
//       title: "Supply Chain & Logistics",
//       src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
//       desc: "Revolutionizing the movement of goods through efficient, agile, and innovative supply chain and logistics solutions.",
//     },
//     {
//       id: 4,
//       title: "Financial Services",
//       src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
//       desc: "Secure and efficient systems for banking, investment, and financial analysis.",
//     },
//     {
//       id: 5,
//       title: "Technology Sector",
//       src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
//       desc: "Shaping the future by driving transformation through cutting-edge digital solutions and innovative technologies.",
//     },
//   ];

//   return (
//     <div
//       className="ind"
//       style={{
//         marginTop: "4rem",
//         backgroundImage: `url(${offer})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <h1 className="industry-title">INDUSTRIES WE SERVE</h1>

//       <div className="card-ind-container">
//         {imageList.map((item, index) => (
//           <div
//             className="ind-card"
//             key={item.id}
//             data-aos="fade-left"
//             data-aos-delay={index * 200}
//           >
//             <img src={item.src} alt={item.title} className="card-image" />
//             <div className="overlay">
//               <h3 className="card-title">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;
// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import offer from "../assets/temp1.jpg";

// const Industries = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true,
//     });
//   }, []);

//   const imageList = [
//     {
//       id: 1,
//       title: "Healthcare & Life Sciences",
//       src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
//     },
//     {
//       id: 2,
//       title: "E-commerce & Retail",
//       src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
//     },
//     {
//       id: 3,
//       title: "Supply Chain & Logistics",
//       src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
//     },
//     {
//       id: 4,
//       title: "Financial Services",
//       src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
//     },
//     {
//       id: 5,
//       title: "Technology Sector",
//       src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
//     },
//   ];

//   return (
//     <div
//       className="ind"
//       style={{
//         marginTop: "4rem",
//         backgroundImage: `url(${offer})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <h1 className="industry-title">INDUSTRIES WE SERVE</h1>

//       <div className="card-ind-container">
//         {imageList.map((item, index) => (
//           <div
//             className="ind-card"
//             key={item.id}
//             data-aos="fade-left"
//             data-aos-delay={index * 200}
//           >
//             <img src={item.src} alt={item.title} className="card-image" />
//             <div className="overlay">
//               <h3 className="card-title">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Industries;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import offer from "../assets/temp1.jpg";

const Industries = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const imageList = [
    {
      id: 1,
      title: "Healthcare & Life Sciences",
      src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
    },
    {
      id: 2,
      title: "E-commerce & Retail",
      src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
    },
    {
      id: 3,
      title: "Supply Chain & Logistics",
      src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
    },
    {
      id: 4,
      title: "Financial Services",
      src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
    },
    {
      id: 5,
      title: "Technology Sector",
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
    },
  ];

  return (
    <div
      className="ind"
      style={{
        marginTop: "4rem",
        // backgroundImage: `url(${offer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="industry-title" style={{ color: "#3674b5" }}>
        INDUSTRIES WE SERVE
      </h1>

      <div className="card-ind-container">
        {imageList.map((item, index) => (
          <div
            className="ind-card"
            key={item.id}
            data-aos="fade-left"
            data-aos-delay={index * 200}
            style={{
              position: "relative",
              width: "300px",
              height: "200px",
              overflow: "hidden",
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              className="card-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              className="overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
            >
              <h3 className="card-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
