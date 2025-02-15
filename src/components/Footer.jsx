import { FiMail } from "react-icons/fi";
import { VscSymbolProperty } from "react-icons/vsc";
import { MdSecurity, MdOutlineInsights } from "react-icons/md";
import { SiAlwaysdata } from "react-icons/si";
import foot from "../assets/foot.jpg";
const Footer = () => {
  const footerContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    flexWrap: "wrap",
  };

  const leftFooterStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two items per row
    gap: "20px",
    maxWidth: "800px",
  };

  const footCardStyle = {
    display: "flex",
    alignItems: "center",
    background: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#007bff",
    marginRight: "15px",
  };

  const textStyle = {
    margin: 0,
    color: "white",
    fontWeight: "800",
  };

  const rightFooterStyle = {
    display: "flex",
    flexDirection: "column", // Stacks elements vertically
    alignItems: "center", // Centers content
    gap: "10px",
    marginRight: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Slightly white with transparency
    padding: "15px",
    borderRadius: "10px",
    marginTop: "1.5rem",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "1rem",
    fontWeight: "bold",
  };
  const linkContainerStyle = {
    display: "flex",
    gap: "10px",
  };

  return (
    <div
      className="footer"
      style={{
        textAlign: "center",
        padding: "40px 20px",
        padding: "40px 20px",
        backgroundImage: `url(${foot})`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* <h1 style={{ fontSize: "2rem", fontWeight: "800", marginLeft: "9rem" }}>
        How can we Help
      </h1> */}
      <div style={footerContainerStyle}>
        {/* <div style={leftFooterStyle}>
          <div style={footCardStyle} className="footer-card">
            <VscSymbolProperty style={iconStyle} />
            <div>
              <h1 style={textStyle} className="head-footer">
                OPERATIONAL EFFICIENCY
              </h1>
              <p style={textStyle}>
                Customized approaches to find the balance of growth, efficiency,
                and innovation, maximizing organizational outcomes.
              </p>
            </div>
          </div>
          <div style={footCardStyle} className="footer-card">
            <MdSecurity style={iconStyle} />
            <div>
              <h1 style={textStyle} className="head-footer">
                SECURITY & COMPLIANCE
              </h1>
              <p style={textStyle}>
                Robust security measures ensuring regulatory compliance and data
                protection.
              </p>
            </div>
          </div>
          <div style={footCardStyle} className="footer-card">
            <SiAlwaysdata style={iconStyle} />
            <div>
              <h1 style={textStyle} className="head-footer">
                DATA ANALYTICS
              </h1>
              <p style={textStyle}>
                Turning raw data into actionable insights for business growth.
              </p>
            </div>
          </div>
          <div style={footCardStyle} className="footer-card">
            <MdOutlineInsights style={iconStyle} />
            <div>
              <h1 style={textStyle} className="head-footer">
                BUSINESS INTELLIGENCE
              </h1>
              <p style={textStyle}>
                Empowering decision-making with advanced analytics and insights.
              </p>
            </div>
          </div>
        </div> */}
        <div style={rightFooterStyle}>
          <h1
            style={{
              fontSize: "1.2rem",
              fontWeight: "800",
              marginTop: "1rem",
              color: "white",
            }}
          >
            CONTACT US
          </h1>
          <div style={linkContainerStyle}>
            <a
              href="mailto:contact@phronesistech.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FiMail size={24} />
            </a>
            <a
              href="mailto:erm@phronesistech.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
