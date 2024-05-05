import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hamburger({ isOpen }) {
  return (
    <div className="hamburger">
      {!isOpen ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </div>
  );
}

export default Hamburger;
