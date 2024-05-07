import "./TestimonialCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";


function TestimonialCard({ src, price, description }) {
  return (
    <div className="tcard-container">
        <div className="tcard-title">
            <h5>Rating</h5>
        </div>
        <div className="tcard-rating">
            <div className="0-rating">        
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="1-rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
       

      <div className="card-image-container">
      <img src={src} alt="greek salad" className="card-image" />
      </div>

      <div className="tcard-text">
        <p>{description}</p>
      </div>
      <div className="tcard-footer">
        <h5>Order for delivery!</h5>
    
      </div>
    </div>
  );
}

export default TestimonialCard;
