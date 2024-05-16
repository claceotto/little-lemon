import "./ResNav.css";
import CircleBtn from "./CircleBtn";

export default function ResNav() {
  return (
    <nav>
      <ul>
        <li className="res-nav">
          <CircleBtn activeClass={"active-circle"} btnNumber={"1"} />
          {/* <div className="bar">asdfa</div> */}
          <CircleBtn activeClass={"inactive-circle"} btnNumber={"2"} />
          <CircleBtn activeClass={"inactive-circle"} btnNumber={"3"} />
        </li>
      </ul>
    </nav>
  );
}
