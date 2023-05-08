import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Instagram, Twitter, Github, Linkedin } from "react-bootstrap-icons";
import {
  faHouse,
  faIdCard,
  faUser,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">im Z</div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">
                <FontAwesomeIcon
                  icon={faHouse}
                  size="lg"
                  style={{ color: "#2486b7" }}
                />
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <FontAwesomeIcon
                  icon={faUser}
                  size="lg"
                  style={{ color: "#2486b7" }}
                />
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project">
                <FontAwesomeIcon
                  icon={faCode}
                  size="lg"
                  style={{ color: "#2486b7" }}
                />
                <span>Project</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <FontAwesomeIcon
                  icon={faIdCard}
                  size="lg"
                  style={{ color: "#2486b7", fill: "green" }}
                />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <ul className="social">
            <li className="nav-item">
              <a href="http://">
                <Linkedin />
              </a>
            </li>
            <li className="nav-item">
              <a href="http://">
                <Github />
              </a>
            </li>
            <li className="nav-item">
              <a href="http://">
                <Twitter />
              </a>
            </li>
            <li className="nav-item">
              <a href="http://">
                {" "}
                <Instagram />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
