import React from "react";
import { NavLink } from "react-router-dom";
import "./trortilla.jpg";
import "./Card.css";

export default function Card({ id, title, image, diets }) {
  return (
    <div className="card-conteiner">
      <NavLink className="navlink-card" to={`/detail/${id}`}>
        <div>
          <img
            className="card-image"
            src={image}
            alt={<img src={`trortilla.jpg`} />}
          />
        </div>
        <div className="card-text">
          <div className="card-title">{title}</div>
          <hr className="hr-card" />
          <div className="card-diets">{`${diets}`}</div>
        </div>
      </NavLink>
    </div>
  );
}
