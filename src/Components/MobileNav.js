import Nav from "./Nav";

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order-online">Online orders</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
