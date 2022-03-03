import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../actions/index";
import Card from "../Card/Card";

export default function Cards() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div>
      {recipes ? recipes.map((el) => (
        <Card key={el.id} title={el.title} image={el.image} diets={el.diets} id={el.id} />
      )): <p>Cargando...</p>}
    </div>
  );
}
