import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import avatar1 from "../Images/avataaars1.png";
import avatar2 from "../Images/avataaars2.png";
import avatar3 from "../Images/avataaars3.png";
import avatar4 from "../Images/avataaars4.png";

export default function Testimonials({ isInnerpage }) {
  const reviews = [
    {
      rating: 5,
      src: avatar1,
      name: "Patricia",
      testimonial: "We had a fantastic meal.",
    },
    {
      rating: 4,
      src: avatar2,
      name: "Linda",
      testimonial: "Great dinner at Little Lemon.",
    },
    {
      rating: 4,
      src: avatar3,
      name: "Robert",
      testimonial: "Great food and lovely place!",
    },
    {
      rating: 5,
      src: avatar4,
      name: "Kevin",
      testimonial: "Best meal we had in a while.",
    },
  ];

  return (
    <article className="testimonials">
      <div className="testimonials-title">
        {isInnerpage ? <h2>Testimonials</h2> : <h1>Testimonials</h1>}
      </div>
      <div className="testimonials-cards">
        {reviews.map((review, index) => {
          return (
            <TestimonialCard
              key={index}
              rating={review.rating}
              src={review.src}
              name={review.name}
              testimonial={review.testimonial}
            />
          );
        })}
      </div>
    </article>
  );
}
