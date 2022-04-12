import React from "react";
import { MdError } from "react-icons/md";
import "./NoRecipes.css";

export const NoRecipes = ({ message }) => {
  return (
    <div className="no-recipes-container">
      <div>
        <MdError size="3em" color="#853535" />
      </div>
      {message}
    </div>
  );
};
