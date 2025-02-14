import React from "react";

const KnowMore = () => {
  return (
    <>
      <div
        className="know-more"
        style={{ borderBottom: "1px solid black", padding: "1rem 0" }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          OUR VALUES
        </h1>
        <div className="know-more-container">
          <div className="chips">
            <div className="chip">CREDIBILITY</div>
            <div className="chip">COMPETENCE</div>
            <div className="chip">COMMITMENT</div>
            <div className="chip chip1">CUSTOMER CENTRICITY</div>
            <div className="chip chip1">CONTINUOUS IMPROVEMENT</div>
          </div>
          <div className="about-content">
            <div className="left-about">
              <div className="heading">
                <h1>GET TO KNOW US</h1>
              </div>
            </div>
            <div
              className="right-about"
              style={{ borderTop: "1px solid black" }}
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
                <span>founded in 2022</span>, specializing in project and
                product management services.
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
      </div>
    </>
  );
};

export default KnowMore;
