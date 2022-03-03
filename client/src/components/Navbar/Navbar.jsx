import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
}
