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
import { BsFillFilterSquareFill } from "react-icons/bs";
import "./FilterBar.css";

export const FilterBar = () => {
  const dispatch = useDispatch();

  function orderAZ(e) {
    e.preventDefault();
    dispatch(orderByAz());
    handleClick();
  }

  function orderZA(e) {
    e.preventDefault();
    dispatch(orderByZa());
    handleClick();
  }

  function orderScore(e) {
    e.preventDefault();
    dispatch(orderByScore());
    handleClick();
  }

  function orderScoreDesc(e) {
    e.preventDefault();
    dispatch(orderByScoreDesc());
    handleClick();
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
    values.diets[0] &&
      values.diets[0] !== "[object Object]" &&
      dispatch(filterByDiets(values.diets));
    handleClick();
  }

  function reset(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="general-filter">
      <div className="searchbar-filter">
        <SearchBar />
        <button onClick={handleClick} open={open} className="mobile-button">
          <BsFillFilterSquareFill size="2.5em" />
        </button>
      </div>

      <div className={open === true ? "order-filter-body" : "cerrado"}>
        <Orders
          orderAZ={orderAZ}
          orderZA={orderZA}
          orderScore={orderScore}
          orderScoreDesc={orderScoreDesc}
        />
        <div className="body-filterbar">
          <form className="form-filter" onSubmit={handleSubmit}>
            <select
              className="select-filter"
              id="diets"
              onChange={handleChange}
            >
              <option value={{ title: "a" }}>Filter by diet</option>
              {diets.map((el) => (
                <option key={el.id}>{el.title}</option>
              ))}
            </select>
            <button className="filter-button">Filter</button>
          </form>
          <button className="filter-button-reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
