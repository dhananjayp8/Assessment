import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const Process = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  };

  const stepStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    maxWidth: "180px",
    height: "380px",
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#007bff",
    marginBottom: "10px",
  };

  const arrowStyle = {
    fontSize: "2rem",
    color: "#007bff",
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 20px",
        padding: "40px 20px",
        // backgroundImage:
        //   "url('../assets/')", // Replace with your image URL
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>PROCESS WE FOLLOW</h1>
      <div style={containerStyle}>
        {/* Step 1 */}
        <div style={stepStyle} className="step">
          <FaLightbulb style={iconStyle} />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Consultation
          </h3>
          <p>
            We collaborate closely with clients to understand their specific
            requirements and challenges.
          </p>
        </div>

        <span style={arrowStyle}>➡</span>

        {/* Step 2 */}
        <div style={stepStyle} className="step">
          <MdDesignServices style={iconStyle} />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Planning & Strategy
          </h3>
          <p>
            Our team develops a comprehensive project roadmap outlining key
            deliverables and timelines
          </p>
        </div>

        <span style={arrowStyle}>➡</span>

        {/* Step 3 */}
        <div style={stepStyle} className="step">
          <FaLaptopCode style={iconStyle} />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Design & Development (Traditional SDLC And Agile)
          </h3>
          <p>
            We create user-centred designs followed by robust, scalable software
            development
          </p>
        </div>

        <span style={arrowStyle}>➡</span>

        {/* Step 4 */}
        <div style={stepStyle} className="step">
          <FaRocket style={iconStyle} />
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700" }}>
            Testing & Deployment
          </h3>
          <p>
            Rigorous testing ensures high-quality products, followed by seamless
            deployment and ongoing post deployment support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
