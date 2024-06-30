import "./HomePage.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "../Testimonials";
import About from "./About";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

function Main({ navigate }) {
  return (
    <main>
      <ScrollToTopOnMount />
      <Hero navigate={navigate} />
      <Specials isInnerpage={true} />
      <Testimonials isInnerpage={true} />
      <About isInnerpage={true} />
    </main>
  );
}
export default Main;
