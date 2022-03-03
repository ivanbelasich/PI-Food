import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../actions";

export const Form = () => {
  const [data, setData] = useState({
    title: "",
    dishTypes: "",
    image: "",
    summary: "",
    score: "",
    healthScore: "",
    instructions: "",
    diets: [],
  });

  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  function handleChange(e) {
    if (e.target.id === "diets") {
      setData((data) => ({
        ...data,
        [e.target.id]: [...data.diets, e.target.value],
      }));
    } else {
      setData((data) => ({
        ...data,
        [e.target.id]: e.target.value,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const datita = await axios.post("http://localhost:3001/recipe", {
        title: data.title,
        /*  dishTypes: data.dishTypes, */
        image: data.image,
        summary: data.summary,
        spoonacularScore: data.score,
        healthScore: data.healthScore,
        instructions: data.instructions,
        diets: data.diets,
      });
      return datita;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="title"
          placeholder="Title"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="dishTypes"
          placeholder="Dish types"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="image"
          placeholder="Image"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="summary"
          placeholder="Summary"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="score"
          placeholder="Score"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="healthScore"
          placeholder="Health score"
        ></input>
      </div>
      <div>
        <input
          onChange={(e) => handleChange(e)}
          id="instructions"
          placeholder="Instructions"
        ></input>
      </div>
      <div>
        <select onChange={(e) => handleChange(e)} id="diets" multiple>
          {diets && diets.map((el) => <option key={el.id}>{el.title}</option>)}
        </select>
      </div>
      <div>
        <button>Crear</button>
      </div>
    </form>
  );
};
