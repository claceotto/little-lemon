import "./Main.css";
import Button from "./Button";
import Card from "./Card";
import TestimonialCard from "./TestimonialCard";

function Main() {
  return (
    <main>
      <article className="hero-article">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Isle of Man</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            <br />
            focused on traditional recipes served with a modern twist.
          </p>
          <Button btext={"Reserve a table"} />
        </div>
        <div className="mobile-hero-image">
          <img
            src="../images/waiter.jpg"
            alt="waiter carring a tray of bruscheta"
          />
        </div>
        <div className="desktop-hero-image">
          <img
            src="../images/waiter.jpg"
            alt="waiter carring a tray of bruscheta"
          />
        </div>
      </article>
      <article className="specials">
        <div className="specials-title">
          <h1>Weekly specials</h1>
        </div>
        <div className="specials-cards">
          <Card
            src={"../images/greek salad.jpg"}
            title={"Greek salad"}
            price={"£12.99"}
            description={
              "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
            }
          />
          <Card
            src={"../images/Bruchetta.jpg"}
            title={"Bruschetta"}
            price={"£5.99"}
            description={
              "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
            }
          />
          <Card
            src={"../images/lemon dessert 2.jpg"}
            title={"Lemon dessert"}
            price={"£5.00"}
            description={
              "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            }
          />
        </div>
      </article>
      <article className="testimonials">
        <div className="testimonials-title">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonials-cards">
          <TestimonialCard
            rating={5}
            src={"../images/avataaars1.png"}
            name={"Patricia"}
            testimonial={"We had a fantastic meal."}
          />
          <TestimonialCard
            rating={4}
            src={"../images/avataaars2.png"}
            name={"Linda"}
            testimonial={"Great dinner at Little Lemon."}
          />
          <TestimonialCard
            rating={4}
            src={"../images/avataaars3.png"}
            name={"Robert"}
            testimonial={"Great food and lovely place!"}
          />
          <TestimonialCard
            rating={5}
            src={"../images/avataaars4.png"}
            name={"Kevin"}
            testimonial={"Best meal we had in a while."}
          />
        </div>
      </article>
      <article>About</article>
    </main>
  );
}
export default Main;
