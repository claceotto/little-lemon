import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="bg-footer-logo">
        <img
          src="../images/Logo.jpg"
          alt="Little Lemon Logo"
          className="bg-logo"
        />
      </div>
      <div className="sm-fotter-logo">
        <img
          src="../images/Vertical-logo.png"
          alt="Little Lemon Logo"
          className="sm-logo"
        />
      </div>
      <div className="footer-links">
        <p className="footer-heading">Navigation</p>
        <a>
          <Link to="/">Home</Link>
        </a>
        <a>
          <Link to="/about">About</Link>
        </a>
        <a>
          <Link to="/menu">Menu</Link>
        </a>
        <a>
          <Link to="/reservation">Reservation</Link>
        </a>
        <a>
          <Link to="/online-orders">Online orders</Link>
        </a>
        <a>
          <Link to="/login">Login</Link>
        </a>
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
