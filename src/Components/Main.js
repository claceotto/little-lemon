import "./Main.css";
import Button from "./Button";
import Card from "./Card";

function Main() {
  return (
    <main>
      <article className="about">
        <div className="about-article">
          <div className="about-text">
            <h1>Little Lemon</h1>
            <h2>Isle of Man</h2>
            <p>
              We are a family owned Mediterranean restaurant,
              <br />
              focused on traditional recipes served with a modern twist.
            </p>
            <Button btext={"Reserve a table"} />
          </div>
          <div className="mobile-about-image">
            <img
              src="../images/waiter.jpg"
              alt="waiter carring a tray of bruscheta"
            />
          </div>
        </div>
        <div className="desktop-about-image">
          <img
            src="../images/waiter.jpg"
            alt="waiter carring a tray of bruscheta"
          />
        </div>
      </article>

      <article className="specials">
        <h1>This week's specials</h1>
        <Button btext={"Online Menu"} />
        <Card
          src={"../images/greek salad.jpg"}
          title={"Greed salad"}
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
          src={"../images/lemon dessert.jpg"}
          title={"Lemon dessert"}
          price={"£5.00"}
          description={
            "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          }
        />
      </article>
      <article>Testimonials</article>
      <article>About</article>
    </main>
  );
}
export default Main;
