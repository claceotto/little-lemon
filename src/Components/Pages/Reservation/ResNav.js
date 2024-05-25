import "./ResNav.css";
import CircleBtn from "../../../Components/CircleBtn";
import { useState, useCallback } from "react";

export default function ResNav() {
  const [activeCircle, setActiveCircle] = useState("circle1");
  const handleBtnClick = useCallback(
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
          <CircleBtn
            activeClass={
              activeCircle === "circle1" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"1"}
            onClick={handleBtnClick("circle1")}
          />
          {/* <div className="bar">asdfa</div> */}
          <CircleBtn
            activeClass={
              activeCircle === "circle2" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"2"}
            onClick={handleBtnClick("circle2")}
          />
          <CircleBtn
            activeClass={
              activeCircle === "circle3" ? "active-circle" : "inactive-circle"
            }
            btnNumber={"3"}
            onClick={handleBtnClick("circle3")}
          />
        </li>
      </ul>
    </nav>
  );
}
