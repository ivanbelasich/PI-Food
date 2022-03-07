import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <body className="body-navbar">
      <nav className="menu-navbar">
        <label className="logo-navbar">P.I Henry</label>
        <ul className="navlink-navbar">
        <li>
          <NavLink activeClassName="active-navbar" to="/">
            Home
          </NavLink>
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
    </body>
  );
}
