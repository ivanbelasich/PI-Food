import { NavLink } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { resetSearch } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(resetSearch(0));
  }

  return (
    <div className="body-navbar">
      <nav className="menu-navbar">
        <label className="logo-navbar">
          <NavLink to="/home" onClick={handleClick}>
            Food Api <MdFoodBank className="navbar-food-icon" />
          </NavLink>
        </label>
        <div className="navlink-navbar">
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) =>
                "navlink-navbar" + (isActive ? " activated" : "")
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navlink-navbar" + (isActive ? " activated" : "")
              }
              to="/add"
            >
              Add
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                "navlink-navbar" + (isActive ? " activated" : "")
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </div>
        {/*   <span className="btn-menu-navbar">
          <GiHamburgerMenu />
        </span> */}
      </nav>
    </div>
  );
}
