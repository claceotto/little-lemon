import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stars({ rating }) {
  switch (rating) {
    case 0:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );

    case 1:
      return (
        <>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 2:
      return (
        <>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 3:
      return (
        <>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );

    case 4:
      return (
        <>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );

    case 5:
      return (
        <>
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
          <FontAwesomeIcon icon={faSolidStar} />
        </>
      );

    default:
      return (
        <>
          <p>Rating not available</p>
        </>
      );
  }
}

export default Stars;
