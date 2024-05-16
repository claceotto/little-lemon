import "./Hero.css";
import Button from "./../Button";

export default function Hero() {
  return (
    <article className="hero-article">
      <div className="hero-text">
        <h1 className="main-h1">Little Lemon</h1>
        <h2 className="main-h2">Isle of Man</h2>
        <p className="main-p">
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
  );
}
