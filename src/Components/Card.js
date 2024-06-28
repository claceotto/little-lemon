import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

function Card({ src, title, price, description }) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={src} alt={title} className="card-image" />
      </div>
      <div className="card-header">
        <p className="card-title">{title}</p>
        <p className="price">{price}</p>
      </div>
      <div className="card-text">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <p className="card-footer-text">Order for delivery!</p>
        <FontAwesomeIcon icon={faPersonBiking} className="card-footer-icon" />
      </div>
    </div>
  );
}

export default Card;
