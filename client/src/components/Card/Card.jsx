import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ id, title, image, diets }) {
  return (
    <div>
      <NavLink to={`/detail/${id}`}>
        <h1>{title}</h1>
      </NavLink>
      <img src={image} alt="img" />
      <h2>Diets:</h2>
      <h3>{diets}</h3>
    </div>
  );
}
