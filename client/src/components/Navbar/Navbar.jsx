import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { orderByAz, orderByZa } from "../../redux/actions/index";

export default function Navbar() {
  const dispatch = useDispatch();

  function orderAZ(e) {
    e.preventDefault();
    dispatch(orderByAz());
  }

  function orderZA(e) {
    e.preventDefault();
    dispatch(orderByZa());
  }

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
        <div>
          <button onClick={(e) => orderAZ(e)}>A-Z</button>
        </div>
        <div>
          <button onClick={(e) => orderZA(e)}>Z-A</button>
        </div>
      </nav>
    </div>
  );
}
