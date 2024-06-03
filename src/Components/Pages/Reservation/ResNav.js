import "./ResNav.css";
import CircleBtn from "../../../Components/CircleBtn";
import { useState, useCallback } from "react";

export default function ResNav() {
  const [activeCircle, setActiveCircle] = useState("circle1");
  const handleCircleClick = useCallback(
    (circle) => () => {
      setActiveCircle(circle);
      console.log(activeCircle);
    },
    [activeCircle]
  );

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
              onClick={handleCircleClick("circle1")}
            />
            <p>Booking details</p>
          </div>
          <div className="nav-group">
            <CircleBtn
              activeClass={
                activeCircle === "circle2" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"2"}
              onClick={handleCircleClick("circle2")}
            />
            <p>Contact details</p>
          </div>
          <div className="nav-group">
            <CircleBtn
              activeClass={
                activeCircle === "circle3" ? "active-circle" : "inactive-circle"
              }
              btnNumber={"3"}
              onClick={handleCircleClick("circle3")}
            />
            <p>Confirmation</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}
