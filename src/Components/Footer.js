import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="../images/Logo.jpg" alt="Little Lemon Logo" />
      </div>
      <div className="footer-text">
        <div className="footer-links">
          <h3>Little Lemon</h3>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order-online">Order Online</a>
          <a href="/login">login</a>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
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
          <p>
            E-mail:
            <br />
            info@little-lemon.com
          </p>
        </div>
        <div className="footer-social"></div>
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </footer>
  );
}

export default Footer;
