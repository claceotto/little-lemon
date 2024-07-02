import "./Header.css";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import { useState } from "react";
import smallLogo from "../Images/small-logo.jpg";
import lemon from "../Images/Lemon.png";

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
            src={smallLogo}
            alt="Little Lemon logo"
            className="header-bg-image"
          />
          <img
            src={lemon}
            alt="Little Lemon logo"
            className="header-sm-image"
          />
        </div>
        <Nav cName={"desktop-nav"} />
        <div className="hamburger" onClick={handleToglle}>
          <Hamburger isOpen={isOpen} />
          {isOpen ? <Nav cName={"mobile-nav"} /> : undefined}
        </div>
      </header>
    </>
  );
}

export default Header;
