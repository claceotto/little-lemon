import "./Specials.css";
import Card from "../Card";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import greekSalad from "../../Images/greek salad.jpg";
import bruschetta from "../../Images/Bruchetta.jpg";
import lemonDessert from "../../Images/lemon dessert 2.jpg";

export default function Specials({ isInnerpage }) {
  const specials = [
    {
      src: greekSalad,
      title: "Greek salad",
      price: "£12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      src: bruschetta,
      title: "Bruschetta",
      price: "£5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      src: lemonDessert,
      title: "Lemon dessert",
      price: "£5.00",
      description:
        "This come straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <>
      <ScrollToTopOnMount />
      <article className="specials">
        <div className="specials-title">
          {isInnerpage ? <h2>Weekly specials</h2> : <h1>Weekly specials</h1>}
        </div>
        <div className="specials-cards">
          {specials.map((special, index) => {
            return (
              <Card
                key={index}
                src={special.src}
                title={special.title}
                price={special.price}
                description={special.description}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
