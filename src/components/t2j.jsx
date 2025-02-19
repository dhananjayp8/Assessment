<div className="slider-container">
        <h1>Our Technologies</h1>
        <div
          className="slider"
          style={{ width: "80%", margin: "auto", textAlign: "center" }}
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
        {/* <div className="offer">
          <div className="offer-container">
            <div className="list">
              <h1>SERVICES</h1>
              <ul>
                <li>IT consulting</li>
                <li>Software product development</li>
                <li>Building custom apps (Mobile/Web apps)</li>
                <li>Manged IT services</li>
                <li>Data integration</li>
                <li>DevOps</li>
                <li>IT Maintenance & Support</li>
              </ul>
            </div>
            <div className="list">
              <h1>SOLUTIONS</h1>
              <ul>
                <li>CRM</li>
                <li>Data analytics & BI</li>
                <li>Cloud</li>
                <li>ERP</li>
                <li>Business process management</li>
                <li>eLearning</li>
                <li>Digital commerce</li>
                <li>Portals</li>
                <li>Artifical intelligence</li>
                <li>Cyber security</li>
                <li>Internet of Things</li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="offer" style={containerStyle}>
          <div className="offer-container" style={listContainerStyle}>
            {/* SERVICES */}
            <div className="list">
              <h1 style={headingStyle}>SERVICES</h1>
              <ul style={listStyle}>
                <li style={listItemStyle}>IT consulting</li>
                <li style={listItemStyle}>Software product development</li>
                <li style={listItemStyle}>
                  Building custom apps (Mobile/Web apps)
                </li>
                <li style={listItemStyle}>Managed IT services</li>
                <li style={listItemStyle}>Data integration</li>
                <li style={listItemStyle}>DevOps</li>
                <li style={listItemStyle}>IT Maintenance & Support</li>
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div className="list">
              <h1 style={headingStyle}>SOLUTIONS</h1>
              <ul style={listStyle}>
                <li style={listItemStyle}>CRM</li>
                <li style={listItemStyle}>Data analytics & BI</li>
                <li style={listItemStyle}>Cloud</li>
                <li style={listItemStyle}>ERP</li>
                <li style={listItemStyle}>Business process management</li>
                <li style={listItemStyle}>eLearning</li>
                <li style={listItemStyle}>Digital commerce</li>
                <li style={listItemStyle}>Portals</li>
                <li style={listItemStyle}>Artificial intelligence</li>
                <li style={listItemStyle}>Cyber security</li>
                <li style={listItemStyle}>Internet of Things</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    {/* <div className="vision-card">
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              Our mission is to empower businesses through innovative, reliable,
              and secure IT solutions that enhance operational efficiency and
              drive digital transformation.
            </p>
          </div> */}