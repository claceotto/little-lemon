import "./Hero.css";
import Button from "./../Button";
import waiter from "../../Images/waiter.jpg";

export default function Hero({ navigate }) {
  const handleReservationClick = () => {
    navigate("/reservation");
  };

  return (
    <article className="hero-article">
      <div className="hero-text">
        <h1 className="main-h1">Little Lemon</h1>
        <p className="hero-sub-title">Isle of Man</p>
        <p className="main-p">
          We are a family owned Mediterranean restaurant,
          <br />
          focused on traditional recipes served with a modern twist.
        </p>
        <Button
          type={"button"}
          btext={"Reserve a table"}
          disabled={false}
          handleClick={handleReservationClick}
        />
      </div>
      <div className="mobile-hero-image">
        <img src={waiter} alt="waiter carring a tray of bruscheta" />
      </div>
      <div className="desktop-hero-image">
        <img src={waiter} alt="waiter carring a tray of bruscheta" />
      </div>
    </article>
  );
}
