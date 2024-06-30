import "./Specials.css";
import Card from "../Card";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

export default function Specials({ isInnerpage }) {
  const specials = [
    {
      src: "../images/greek salad.jpg",
      title: "Greek salad",
      price: "£12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      src: "../images/Bruchetta.jpg",
      title: "Bruschetta",
      price: "£5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    },
    {
      src: "../images/lemon dessert 2.jpg",
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
