import "./ResNav.css";
import CircleBtn from "../../../Components/CircleBtn";
import { useState, useCallback, useEffect } from "react";

export default function ResNav({
  isPartOneValid,
  partOneValidation,
  section,
  handleCircleOneNav,
}) {
  const [activeCircle, setActiveCircle] = useState("circle1");
  //consider setting up gobal state for sections...

  useEffect(() => {
    if (section < 1 || section > 3) {
      return;
    }

    setActiveCircle(`circle${section}`);
    // if (section === 1) {
    //   setActiveCircle("circle1");
    // } else if (section === 2) {
    //   setActiveCircle("circle2");
    // }
  }, [section, activeCircle]);

  const handleCircleClick = useCallback(
    (circle) => () => {
      if (isPartOneValid) {
        setActiveCircle(`circle${circle}`);
        handleCircleOneNav(circle);
      } else {
        partOneValidation();
      }
    },
    [handleCircleOneNav, isPartOneValid, partOneValidation]
  );

  //I might need to have separate handleClicks for the
  //circles as they may be doing different things.

  // const handleCircleOneClick = useCallback(() => {
  //   setActiveCircle("circle1");
  //   handleCircleOneNav(1);
  // }, [setActiveCircle, handleCircleOneNav]);

  return (
    <nav>
      <ul>
        <li className="res-nav">
          <div className="nav-group">
            <CircleBtn
              activeClass={
                activeCircle === "circle1" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"1"}
              onClick={handleCircleClick(1)}
              // onClick={handleCircleOneClick}
            />
            <p>Booking details</p>
          </div>
          <div className="nav-group">
            <CircleBtn
              activeClass={
                activeCircle === "circle2" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"2"}
              onClick={handleCircleClick(2)}
            />
            <p>Contact details</p>
          </div>
          <div className="nav-group">
            <CircleBtn
              activeClass={
                activeCircle === "circle3" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"3"}
              onClick={handleCircleClick(3)}
            />
            <p>Confirmation</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
