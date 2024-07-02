import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../Images/Logo.jpg";
import verticalLogo from "../Images/Vertical-logo.png";

function Footer() {
  return (
    <footer>
      <div className="bg-footer-logo">
        <img src={logo} alt="Little Lemon Logo" className="bg-logo" />
      </div>
      <div className="sm-fotter-logo">
        <img src={verticalLogo} alt="Little Lemon Logo" className="sm-logo" />
      </div>
      <div className="footer-links">
        <p className="footer-heading">Navigation</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/online-orders">Online orders</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer-contact">
        <p className="footer-heading">Contact</p>
        <p>
          Limoeiro Avenue
          <br />
          Citrus City
          <br />
          Isle of Man
        </p>

        <p>
          Telephone:
          <br />
          000-0000
        </p>

        <p>info@little-lemon.com</p>
      </div>
      <div className="footer-social">
        <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
        <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
        <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
      </div>
    </footer>
  );
}

export default Footer;
