import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDiets,
  orderByAz,
  orderByScore,
  orderByScoreDesc,
  orderByZa,
} from "../../redux/actions/index";
import { Orders } from "../Orders/Orders";

export const FilterBar = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

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

  const [values, setValues] = React.useState({
    // React.useState() es lo mismo que useState() pero sin importar
    diets: [], // { useState } from "react";
  });

  function handleChange(e) {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      [e.target.title]: [...values.diets, e.target.value],
    }));
  }

  return (
    <div>
      <div>
        <Orders
          orderAZ={orderAZ}
          orderZA={orderZA}
          orderScore={orderScore}
          orderScoreDesc={orderScoreDesc}
        />
      </div>
      <div>
        <select onChange={handleChange}>
          {diets.map((el) => (
            <option>{el.title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
