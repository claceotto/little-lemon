import "./ResNav.css";
import CircleBtn from "../../../Components/CircleBtn";
import { useState, useCallback, useEffect } from "react";

export default function ResNav({
  isPartOneValid,
  isPartTwoValid,
  partOneValidation,
  partTwoValidation,
  section,
  handleCircleNav,
}) {
  const [activeCircle, setActiveCircle] = useState("circle1");
  //consider setting up gobal state for sections...

  useEffect(() => {
    if (section < 1 || section > 3) {
      return;
    }

    setActiveCircle(`circle${section}`);
  }, [section, activeCircle]);

  const handleCircleOneClick = useCallback(
    (circle) => () => {
      setActiveCircle(`circle${circle}`);
      handleCircleNav(circle);
    },
    [handleCircleNav]
  );

  const handleCircleTwoClick = useCallback(
    (circle) => () => {
      if (isPartOneValid) {
        setActiveCircle(`circle${circle}`);
        handleCircleNav(circle);
      } else {
        partOneValidation();
      }
    },
    [isPartOneValid, handleCircleNav, partOneValidation]
  );

  const handleCircleThreeClick = useCallback(
    (circle) => () => {
      if (isPartTwoValid) {
        setActiveCircle(`circle${circle}`);
        handleCircleNav(circle);
      } else {
        partTwoValidation();
      }
    },
    [isPartTwoValid, handleCircleNav, partTwoValidation]
  );

  //I might need to have separate handleClicks for the
  //circles as they may be doing different things.

  // const handleCircleOneClick = useCallback(() => {
  //   setActiveCircle("circle1");
  //   handleCircleOneNav(1);
  // }, [setActiveCircle, handleCircleOneNav]);

  return (
    <nav>
      <ul className="res-nav">
        {/* <li className="res-nav"> */}
        <li className="nav-group">
          {/* <div className="nav-group"> */}
          <CircleBtn
            activeClass={
              activeCircle === "circle1" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"1"}
            onClick={handleCircleOneClick(1)}
            // onClick={handleCircleOneClick}
          />
          <p>Booking details</p>
        </li>
        {/* </div> */}
        <li className="nav-group">
          <CircleBtn
            activeClass={
              activeCircle === "circle2" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"2"}
            onClick={handleCircleTwoClick(2)}
          />
          <p>Contact details</p>
        </li>
        <li className="nav-group">
          <CircleBtn
            activeClass={
              activeCircle === "circle3" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"3"}
            onClick={handleCircleThreeClick(3)}
          />
          <p>Confirmation</p>
        </li>
      </ul>
    </nav>
  );
}
