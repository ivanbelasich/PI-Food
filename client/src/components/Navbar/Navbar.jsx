import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="body-navbar">
      <nav className="menu-navbar">
        <label className="logo-navbar">
          <NavLink to="/home">P.I Henry</NavLink>
        </label>
        <ul className="navlink-navbar">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <span className="btn-menu-navbar">
          <GiHamburgerMenu />
        </span>
      </nav>
    </div>
  );
}
