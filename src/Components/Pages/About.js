import "./About.css";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import marioAndAdrian from "../../Images/Mario and Adrian b.jpg";

export default function About({ isInnerpage }) {
  return (
    <>
      <ScrollToTopOnMount />
      <article className="about">
        {isInnerpage ? <h2>About us</h2> : <h1>About us</h1>}
        {/* <h1>About us</h1> */}
        <div className="about-content">
          <div className="about-text">
            <p>
              Based in the Isle of Man, Little Lemon is a family-owned
              Mediterranean restaurant, focused on traditional recipes served
              with a modern twist.
            </p>
            <p>
              Our chefs draw inspiration from Italian, Greek, and Turkish
              culture, creating a menu of 12-15 items that we rotate seasonally.
            </p>
            <p>
              The restaurant boasts a rustic and relaxed atmosphere with
              moderate prices, making it a popular place for a meal any time of
              the day.
            </p>
          </div>
          <div className="about-image">
            <img
              className="about-image"
              src={marioAndAdrian}
              alt="A chef and restaurant manager"
            />
          </div>
        </div>
      </article>
    </>
  );
}
