import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, image, diets }) {
  return (
    <div className="card-conteiner">
      <NavLink className="navlink-card" to={`/detail/${id}`}>
        <div>
          <img className="card-image" src={image} alt="img" />
        </div>
        <div className="card-title">{title}</div>
        <div className="card-diets">{`${diets}`}</div>
      </NavLink>
    </div>
  );
}
