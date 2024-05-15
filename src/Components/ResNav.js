import { Link } from "react-router-dom";

export default function ResNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/reservation/booking-details">1</Link>
          <Link to="/reservation/contact">2</Link>
          <Link to="/reservation/confirmation">3</Link>
        </li>
      </ul>
    </nav>
  );
}
