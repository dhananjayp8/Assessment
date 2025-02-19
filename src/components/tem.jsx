

<div className="navbar">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <ul>
              <li
                className="p-2 cursor-pointer hover:bg-gray-700 md:hover:bg-transparent relative"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              >
                <button className="btn btn-secondary dropdown-toggle">
                  About Us
                </button>
                {aboutDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-gray-700 text-white w-48 shadow-lg p-2 rounded-md">
                    <li className="p-2 hover:bg-gray-600">CREDIBILITY</li>
                    <li className="p-2 hover:bg-gray-600">COMPETENCE</li>
                    <li className="p-2 hover:bg-gray-600">COMMITMENT</li>
                    <li className="p-2 hover:bg-gray-600">
                      CUSTOMER CENTRICITY
                    </li>
                    <li className="p-2 hover:bg-gray-600">
                      CONTINUOUS IMPROVEMENT
                    </li>
                  </ul>
                )}
              </li>
              {/* <li>About</li> */}
              {/* <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About us
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div> */}
              <li>Mission</li>
              <li>Offerings</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      