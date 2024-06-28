import "./HomePage.css";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "../Testimonials";
import About from "./About";
function Main() {
  return (
    <main>
      <Hero />
      <Specials isInnerpage={true} />
      <Testimonials isInnerpage={true} />
      <About isInnerpage={true} />
    </main>
  );
}
export default Main;
