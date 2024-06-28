import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials({ isInnerpage }) {
  const reviews = [
    {
      rating: 5,
      src: "../images/avataaars1.png",
      name: "Patricia",
      testimonial: "We had a fantastic meal.",
    },
    {
      rating: 4,
      src: "../images/avataaars2.png",
      name: "Linda",
      testimonial: "Great dinner at Little Lemon.",
    },
    {
      rating: 4,
      src: "../images/avataaars3.png",
      name: "Robert",
      testimonial: "Great food and lovely place!",
    },
    {
      rating: 5,
      src: "../images/avataaars4.png",
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
