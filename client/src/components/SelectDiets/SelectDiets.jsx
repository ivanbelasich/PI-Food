import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../actions";

export const SelectDiets = () => {
  const [data, setData] = useState({
    diets: [],
  });

  const diets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleChange(e) {
    setData((data) => ({
      ...data,
      [e.target.id]: [...data.diets, e.target.value],
    }));
  }

  return (
    <div>
      <div>
        <select onChange={(e) => handleChange(e)} id="diets" multiple>
          {diets && diets.map((el) => <option key={el.id}>{el.title}</option>)}
        </select>
      </div>
    </div>
  );
};
