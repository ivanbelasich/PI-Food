import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="body-navbar">
      <nav className="menu-navbar">
        <label className="logo-navbar">
          <NavLink to="/home">
            Food Api <MdFoodBank className="navbar-food-icon" />
          </NavLink>
        </label>
        <div className="navlink-navbar">
          <li>
            <NavLink className={({ isActive }) => "navlink-navbar" + (isActive ? " activated" : "")} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => "navlink-navbar" + (isActive ? " activated" : "")} to="/add">Add</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => "navlink-navbar" + (isActive ? " activated" : "")} to="/about">About</NavLink>
          </li>
        </div>
        <span className="btn-menu-navbar">
          <GiHamburgerMenu />
        </span>
      </nav>
    </div>
  );
}
