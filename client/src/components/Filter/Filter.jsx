import React from "react";
import useSelector from "react-redux";

export const Filter = () => {
  const recipes = useSelector((state) => state.recipes);

  return (
    <div>
      <select>
        <option></option>
      </select>
    </div>
  );
};
