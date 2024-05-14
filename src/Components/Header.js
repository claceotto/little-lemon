import "./Header.css";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToglle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div>
          <img
            src="../images/small-logo.jpg"
            alt="Little Lemon logo"
            className="header-bg-image"
          />
          <img
            src="../images/lemon.png"
            alt="Little Lemon logo"
            className="header-sm-image"
          />
        </div>
        <Nav className="header-links" />
        <div className="hamburger" onClick={handleToglle}>
          <Hamburger isOpen={isOpen} />
          {isOpen ? <MobileNav /> : undefined}
        </div>
      </header>
    </>
  );
}

export default Header;
