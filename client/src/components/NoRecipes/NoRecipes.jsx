import React from "react";
import { MdError } from "react-icons/md";
import "./NoRecipes.css";

export const NoRecipes = () => {
  return (
    <div className="no-recipes-container">
      <div>
        <MdError size="3em" color="#853535" />
      </div>
      There are no recipes with those diets! Press reset to continue searching.
    </div>
  );
};
