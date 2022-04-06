import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByDiets,
  getDiets,
  getRecipes,
  orderByAz,
  orderByScore,
  orderByScoreDesc,
  orderByZa,
} from "../../redux/actions/index";
import { Orders } from "../Orders/Orders";
import SearchBar from "../SearchBar/SearchBar";
import "./FilterBar.css";

export const FilterBar = () => {
  const dispatch = useDispatch();

  function orderAZ(e) {
    e.preventDefault();
    dispatch(orderByAz());
  }

  function orderZA(e) {
    e.preventDefault();
    dispatch(orderByZa());
  }

  function orderScore(e) {
    e.preventDefault();
    dispatch(orderByScore());
  }

  function orderScoreDesc(e) {
    e.preventDefault();
    dispatch(orderByScoreDesc());
  }

  //////////           FILTRO DE DIETAS            //////////

  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const [values, setValues] = React.useState({
    // React.useState() es lo mismo que useState() pero sin importar
    diets: [], // { useState } from "react";
  });

  function handleChange(e) {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      [e.target.id]: [e.target.value],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterByDiets(values.diets));
  }

  function reset(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <div className="general-filter">
      <div className="searchbar-filter">
        <SearchBar />
      </div>
      <div className="order-filter-body">
      <Orders
        orderAZ={orderAZ}
        orderZA={orderZA}
        orderScore={orderScore}
        orderScoreDesc={orderScoreDesc}
      />
      <div className="body-filterbar">
        <form className="form-filter" onSubmit={handleSubmit}>
          <select className="select-filter" id="diets" onChange={handleChange}>
            <option value={{ title: "a" }}>Select</option>
            {diets.map((el) => (
              <option key={el.id}>{el.title}</option>
            ))}
          </select>
          <button className="filter-button">Filtrar</button>
        </form>
        <button className="filter-button-reset" onClick={reset}>
          Reset
        </button>
      </div>
      </div>
    </div>
  );
};
