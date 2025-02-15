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
import footer from "../assets/footer.jpg";
import offer from "../assets/offer.jpeg";
// Salesforce ?
// AWS
// Azure
// Web development (.NET, Java, Python)
// Oracle Apps/Fusion
// NetSuite
// Microsoft Technology stack
// Boomi
// Talend
// Power BI
// Atlassian (Jira, Bitbucket)
// GitHub
const boomiLogo = "https://boomi.com/wp-content/uploads/social-media-icon.png";
const netsuiteLogo = "https://cdn.worldvectorlogo.com/logos/netsuite.svg";
const powerBiLogo = "https://img.icons8.com/ios7/512/power-bi.png";

const BoomiIcon = () => (
  <img src={boomiLogo} alt="Boomi" width="100" height="150" />
);
const NetSuiteIcon = () => (
  <img src={netsuiteLogo} alt="NetSuite" width="64" height="64" />
);
const PowerBiIcon = () => (
  <img src={powerBiLogo} alt="Power BI" width="64" height="64" />
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
const Offerings = () => {
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
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "100vh",
  };

  const listContainerStyle = {
    display: "flex",
    gap: "50px",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    textAlign: "center",
  };

  const listItemStyle = {
    margin: "4px 0",
    fontSize: "16px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };
  return (
    <>
      <div
        className="slide-main-container"
        style={{
          textAlign: "center",
          padding: "40px 20px",
          padding: "40px 20px",
          backgroundImage: `url(${offer})`, // Replace with your image URL
          backgroundSize: "cover",
          opacity: "0.8",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          zIndex: -1,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            textAlign: "center",
            // color: "#3674b5",
            color: "white",
          }}
        >
          OUR OFFERINGS
        </h1>
        <div className="slider-container">
          <h1 style={{ color: "white" }}>Technologies</h1>
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
          <div className="offer">
            <div className="offer-container">
              <div className="list">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "white",
                  }}
                  className="head-list"
                >
                  SERVICES
                </h1>
                <div
                  className="list-cont"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  {/* Left Column */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <li>IT consulting</li>
                    <li>Software product development</li>
                    <li>Building custom apps (Mobile/Web apps)</li>
                    <li>Managed IT services</li>
                  </ul>

                  {/* Right Column */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      textAlign: "left",
                    }}
                  >
                    <li>Data integration</li>
                    <li>DevOps</li>
                    <li>IT Maintenance & Support</li>
                  </ul>
                </div>
              </div>

              <div className="list">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "white",
                  }}
                  className="head-list"
                >
                  SOLUTIONS
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    cursor: "pointer",
                  }}
                  className="list-cont"
                >
                  {/* Left Column */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      textAlign: "right",
                    }}
                  >
                    <li>CRM</li>
                    <li>Data analytics & BI</li>
                    <li>Cloud</li>
                    <li>ERP</li>
                    <li>Business process management</li>
                    <li>eLearning</li>
                  </ul>

                  {/* Right Column */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      textAlign: "left",
                    }}
                  >
                    <li>Digital commerce</li>
                    <li>Portals</li>
                    <li>Artificial intelligence</li>
                    <li>Cyber security</li>
                    <li>Internet of Things</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;
