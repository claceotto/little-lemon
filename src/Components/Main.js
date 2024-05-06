import "./Main.css";
import Button from "./Button";

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

      <article>This weeks specials</article>
      <article>Testimonials</article>
      <article>About</article>
    </main>
  );
}
export default Main;
