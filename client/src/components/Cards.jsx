import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../actions";
import Card from "./Card";

export default function Cards() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  console.log(recipes, "esto es reicpes");

  return (
    <div>
      {recipes.map((el) => (
        <Card title={el.title} image={el.image} diets={el.diets} />
      ))}
    </div>
  );
}
