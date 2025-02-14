import React from "react";
import Slider from "react-slick";
const Industries = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true, // Keep infinite loop
  //     speed: 1000, // Smooth transition
  //     slidesToShow: 1, // Show one text at a time
  //     slidesToScroll: 1,
  //     autoplay: true, // Enable autoplay
  //     autoplaySpeed: 3000, // Rotate every 3s
  //     fade: true, // Smooth fading effect
  //     cssEase: "linear", // Improve fade animation
  //     adaptiveHeight: true, // Adjust height dynamically
  //   };

  const imageList = [
    {
      id: 1,
      title: "Healthcare & Life Sciences",
      src: "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
      desc: "Innovative solutions to streamline patient care and medical record management.",
    },
    {
      id: 2,
      title: "E-commerce & Retail",
      src: "https://cdn.prod.website-files.com/63a40b5d0bd7064cf2860235/63bbee73e3ca2a3277f85867_e-commerce-link-building-760x400.png",
      desc: "Robust platforms for online retail, inventory management, and customer engagement.",
    },
    {
      id: 3,
      title: "Supply Chain & Logistics",
      src: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg",
      desc: "Revolutionizing the movement of goods through efficient, agile, and innovative supply chain and logistics solutions.",
    },
    {
      id: 4,
      title: "Financial Services",
      src: "https://www.bms.co.in/wp-content/uploads/2014/11/Financial-Services.jpeg",
      desc: "Secure and efficient systems for banking, investment, and financial analysis.",
    },
    {
      id: 5,
      title: "Technology Sector",
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/07/full/1720369883-1424.jpg?im=FeatureCrop,size=(826,465)",
      desc: "Shaping the future by driving transformation through cutting-edge digital solutions and innovative technologies.",
    },
  ];

  console.log(imageList);

  return (
    <>
      {/* <div className="ind" style={{ marginTop: "4rem" }}>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        INDUSTRIES WE SERVE
      </h1>
      <Slider {...settings} className="card-ind-container">
        {imageList.map((item) => (
          <div className="ind-card" key={item.id} style={{ padding: "10px" }}>
            <img src={item.src} alt={item.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </Slider>
    </div> */}
      <div className="ind" style={{ marginTop: "4rem" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          INDUSTRIES WE SERVE
        </h1>

        <div className="card-ind-container">
          {imageList.map((item, key) => (
            <div className="ind-card" key={item.id}>
              <img src={item.src} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industries;
