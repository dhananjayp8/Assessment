import React from "react";
import Slider from "react-slick";
import {
  FaJava,
  FaPython,
  FaSalesforce,
  FaAws,
  FaAtlassian,
  FaGithub,
} from "react-icons/fa";
import { SiDotnet, SiTalend } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { GrOracle } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./TechnologySlider.css";

const boomiLogo = "https://boomi.com/wp-content/uploads/social-media-icon.png";
const netsuiteLogo = "https://cdn.worldvectorlogo.com/logos/netsuite.svg";
const powerBiLogo = "https://img.icons8.com/ios7/512/power-bi.png";

const BoomiIcon = () => (
  <img
    src={boomiLogo}
    alt="Boomi"
    className="icon-img"
    width="100"
    height="150"
  />
);
const NetSuiteIcon = () => (
  <img
    src={netsuiteLogo}
    alt="NetSuite"
    className="icon-img"
    width="64"
    height="64"
  />
);
const PowerBiIcon = () => (
  <img
    src={powerBiLogo}
    alt="Power BI"
    className="icon-img"
    width="64"
    height="64"
  />
);

const icons = [
  { id: 1, icon: <FaSalesforce /> },
  { id: 2, icon: <FaAws /> },
  { id: 3, icon: <VscAzure /> },
  { id: 4, icon: <SiDotnet /> },
  { id: 5, icon: <FaJava /> },
  { id: 6, icon: <FaPython /> },
  { id: 7, icon: <GrOracle /> },
  { id: 8, icon: <BoomiIcon /> },
  { id: 9, icon: <NetSuiteIcon /> },
  { id: 10, icon: <SiTalend /> },
  { id: 11, icon: <PowerBiIcon /> },
  { id: 12, icon: <FaAtlassian /> },
  { id: 13, icon: <FaGithub /> },
];

const Tech = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: false,
  };
  return (
    <div
      className="slider-container"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ color: "#3674b5", fontSize: "2.2rem", fontWeight: "900" }}>
        TECHNOLOGIES
      </h1>
      <div
        className="slider"
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Slider {...settings}>
          {icons.map((item) => (
            <div key={item.id} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "4rem",
                  color: "#61dafb",
                  padding: "20px",
                }}
              >
                {item.icon}
              </div>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                {item.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Tech;
