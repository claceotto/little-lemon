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
        <h5>{title}</h5>
        <h5 className="price">{price}</h5>
      </div>
      <div className="card-text">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <h5>Order for delivery!</h5>
        <FontAwesomeIcon icon={faPersonBiking} className="card-footer-icon" />
      </div>
    </div>
  );
}

export default Card;
