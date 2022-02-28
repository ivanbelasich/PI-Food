import React from "react";

export default function Card({ title, image, diets }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="img"/>
      <h3>{diets}</h3>
    </div>
  );
}
