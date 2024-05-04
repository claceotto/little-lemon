import DesktopNav from "./DesktopNav";
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
        <img src="../images/small-logo.jpg" alt="Little Lemon logo" />
        <DesktopNav />
        <div className="hamburger" onClick={handleToglle}>
          <Hamburger isOpen={isOpen} />
          {isOpen ? <MobileNav /> : undefined}
        </div>
      </header>
    </>
  );
}

export default Header;
