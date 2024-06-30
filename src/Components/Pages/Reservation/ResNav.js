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
  const [isDisabled, setIsDisabled] = useState(false);
  //consider setting up gobal state for sections...

  useEffect(() => {
    if (section < 1 || section > 3) {
      return;
    }
    setActiveCircle(`circle${section}`);
  }, [section, activeCircle]);

  useEffect(() => {
    if (section === 3) {
      setIsDisabled(true);
    }
  }, [section]);

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

  const handleCircleThreeClick = useCallback(() => {
    alert(
      "A confirmation of your booking will be provided once sections 1 and 2 are completed and your form is submitted successfully"
    );
    if (section === 1) {
      partOneValidation();
    } else {
      partTwoValidation();
    }
  }, [section, partOneValidation, partTwoValidation]);

  return (
    <nav>
      <ul className="res-nav">
        <li className="nav-group">
          <div className="circle-container">
            <CircleBtn
              activeClass={
                activeCircle === "circle1" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"1"}
              disabled={isDisabled}
              onClick={handleCircleOneClick(1)}
            />
          </div>
          <div className="circle-label-container">
            <p>Booking details</p>
          </div>
        </li>
        <li className="nav-group">
          <div className="circle-container">
            <CircleBtn
              activeClass={
                activeCircle === "circle2" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"2"}
              disabled={isDisabled}
              onClick={handleCircleTwoClick(2)}
            />
          </div>
          <div className="circle-label-container">
            <p>Contact details</p>
          </div>
        </li>
        <li className="nav-group">
          <div className="circle-container">
            <CircleBtn
              activeClass={
                activeCircle === "circle3" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"3"}
              disabled={false}
              onClick={handleCircleThreeClick}
            />
          </div>
          <div className="circle-label-container">
            <p>Confirmation</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
