import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import { dishTypesData } from "../../redux/constants";
import Validate from "../ValidateForm/ValidateForm";
import "./Form.css";

export const Form = () => {
  const [data, setData] = React.useState({
    title: "",
    dishTypes: [],
    image: "",
    summary: "",
    score: "",
    healthScore: "",
    instructions: "",
    diets: [],
  });

  const [errors, setErrors] = React.useState({});

  const diets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleChange(e) {
    if (e.target.id === "diets" || e.target.id === "dishTypes") {
      setData((data) => ({
        ...data,
        [e.target.id]: [...data.diets, e.target.value]
      }));
    /*   setErrors(
        Validate({ [e.target.name]: [...data.diets,  e.target.value] })
      ); */
    } else {
      setData((data) => ({
        ...data,
        [e.target.id]: e.target.value,
      }));
    }
    setErrors(Validate({ ...data, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const datita = await axios.post("http://localhost:3001/recipe", {
        title: data.title,
        dishTypes: data.dishTypes,
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
    <form className="form-container" onSubmit={handleSubmit}>
      <p>
        <label for="title">Title</label>
        <input
          onChange={(e) => handleChange(e)}
          id="title"
          placeholder="Title"
          value={data.title}
          required
        />
        {errors.title && <div className="errors-message">{errors.title}</div>}
      </p>
      <p>
        <label for="image">Image</label>
        <input
          onChange={(e) => handleChange(e)}
          id="image"
          placeholder="Insert a link"
          value={data.image}
          required
        ></input>
        {errors.image && <div className="errors-message">{errors.image}</div>}
      </p>
      <p>
        <label for="score">Score</label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          id="score"
          placeholder="From 0 to 100"
          value={data.score}
          required
        ></input>
        {errors.score && <div className="errors-message">{errors.score}</div>}
      </p>
      <p>
        <label for="healthScore">Health Score</label>
        <input
          type="number"
          onChange={(e) => handleChange(e)}
          id="healthScore"
          placeholder="From 0 to 100"
          value={data.healthScore}
          required
        ></input>
        {errors.healthScore && (
          <div className="errors-message">{errors.healthScore}</div>
        )}
      </p>
      <p>
        <label for="dishTypes">Dishtypes</label>
        <select
         /*  value={data.dishTypes} */
          onChange={(e) => handleChange(e)}
          id="dishtypes"
          multiple
          required
        >
          {dishTypesData.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        {errors.dishTypes && (
          <div className="errors-message">{errors.dishTypes}</div>
        )}
      </p>
      <p>
        <label for="diets">Diets</label>
        <select
         /*  value={data.diets} */
          onChange={(e) => handleChange(e)}
          id="diets"
          multiple
          required
        >
          {diets && diets.map((el) => <option key={el.id}>{el.title}</option>)}
        </select>
        {errors.diets && <div className="errors-message">{errors.diets}</div>}
      </p>
      <p className="block">
        <label for="summary">Summary</label>
        <textarea
          value={data.summary}
          rows="3"
          type="text"
          onChange={(e) => handleChange(e)}
          id="summary"
          placeholder="A brief summary"
          required
        ></textarea>
        {errors.summary && (
          <div className="errors-message">{errors.summary}</div>
        )}
      </p>
      <p className="block">
        <label for="instructions">Instructions</label>
        <textarea
          value={data.instructions}
          rows="3"
          type="text"
          onChange={(e) => handleChange(e)}
          id="instructions"
          placeholder="Step by step to create the dish"
          required
        ></textarea>
        {errors.instructions && (
          <div className="errors-message">{errors.instructions}</div>
        )}
      </p>
      <p className="block-button">
        <button
          className={(errors) ? "disabled" : "enabled"}
          disabled={
          
            errors.image 
              ? true
              : false
          }
        >
          {" "}
          Crear
        </button>
      </p>
    </form>
  );
};
