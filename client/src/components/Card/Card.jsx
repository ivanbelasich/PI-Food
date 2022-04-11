import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

export default function Card({ id, title, image, diet }) {
  return (
    <div className="card-conteiner">
      <NavLink className="navlink-card" to={`/detail/${id}`}>
          <img
            className="card-image"
            src={image}
            alt="img not found"
          />
{/*         <div className="card-text"> */}
          <div className="card-title">{title}</div>
          <hr className="hr-card" />
          <div className="card-diets">{`${diet} `.replace(/,/g,", ")}</div>
    {/*     </div> */}
      </NavLink>
    </div>
  );
}
