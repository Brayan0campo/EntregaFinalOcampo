import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header-navbar">
      <Link to="/">
        <h3 className="header-navbar__logo">TECH STORE</h3>
      </Link>
      <nav>
        <ul className="header-navbar__menu">
          <li>
            <NavLink to="/category/phones">PHONES</NavLink>
          </li>
          <li>
            <NavLink to="/category/laptops">LAPTOPS</NavLink>
          </li>
          <li>
            <NavLink to="/category/tablets">TABLETS</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
