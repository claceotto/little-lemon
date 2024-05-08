import "./TestimonialCard.css";
import Stars from "./Stars";

function TestimonialCard({ rating, src, name, testimonial }) {
  return (
    <div className="tcard-container">
      <div className="tcard-title">
        <h5>Rating:</h5>
      </div>
      <div className="tcard-rating">
        <Stars rating={rating} />
      </div>
      <div className="tcard-avatar-container">
        <img src={src} alt="avatar" className="tcard-avatar" />
        <p>{name}</p>
      </div>
      <div className="tcard-text">
        <p>{testimonial}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
