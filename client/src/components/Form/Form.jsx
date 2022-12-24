import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";
import { dishTypesData } from "../../redux/constants";
import Validate from "../ValidateForm/ValidateForm";
import Modal from "../Modal/Modal";
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

  ///////////            MODAL            ///////////

  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  /////////////////////////////////////////////////

  const [errors, setErrors] = React.useState({});

  const diets = useSelector((state) => state.diets[0]);
  console.log(diets, "diets[0].title");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleChange(e) {
    if (e.target.id === "diets") {
      setData((data) => ({
        ...data,
        [e.target.id]: !data.diets.includes(e.target.value)
          ? [...data.diets, e.target.value]
          : [...data.diets],
      }));
      setErrors(Validate({ ...data, [e.target.name]: [e.target.value] }));
    } else if (e.target.id === "dishTypes") {
      setData((data) => ({
        ...data,
        [e.target.id]: [e.target.value],
      }));
      setErrors(Validate({ ...data, [e.target.name]: e.target.value }));
    } else {
      setData((data) => ({
        ...data,
        [e.target.id]: e.target.value,
      }));
      setErrors(Validate({ ...data, [e.target.name]: e.target.value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const dataDB = await axios.post("http://localhost:3001/recipe", {
        title: data.title,
        dishTypes: data.dishTypes,
        image: data.image,
        summary: data.summary,
        spoonacularScore: data.score,
        healthScore: data.healthScore,
        instructions: data.instructions,
        diets: data.diets,
      });
      e.target.reset();
      return dataDB;
    } catch (error) {
      console.log(error);
    }
  }

  function filterDiet(i) {
    let actualizado = data.diets.filter((el) => data.diets[i] !== el);
    setData((data) => ({ ...data, diets: actualizado }));
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => handleChange(e)}
            id="title"
            placeholder="Title"
            required
            className={errors.title}
          />
          {errors.title && <div className="errors-message">{errors.title}</div>}
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            onChange={(e) => handleChange(e)}
            id="image"
            placeholder="Insert a link"
            required
          ></input>
          {errors.image && <div className="errors-message">{errors.image}</div>}
        </div>
        <div>
          <label htmlFor="score">Score</label>
          <input
            type="number"
            onChange={(e) => handleChange(e)}
            id="score"
            placeholder="From 0 to 100"
            required
          ></input>
          {errors.score && <div className="errors-message">{errors.score}</div>}
        </div>
        <div>
          <label htmlFor="healthScore">Health Score</label>
          <input
            type="number"
            onChange={(e) => handleChange(e)}
            id="healthScore"
            placeholder="From 0 to 100"
            required
          ></input>
          {errors.healthScore && (
            <div className="errors-message">{errors.healthScore}</div>
          )}
        </div>
        <div>
          <label htmlFor="dishTypes">Dishtypes</label>
          <select onChange={(e) => handleChange(e)} id="dishTypes" required>
            <option value="">Select a dish type</option>
            {dishTypesData.map((el, idx) => (
              <option key={idx}>{el}</option>
            ))}
          </select>
          {errors.dishTypes && (
            <div className="errors-message">{errors.dishTypes}</div>
          )}
        </div>
        <div>
          <label htmlFor="diets">Diets</label>
          <select onChange={(e) => handleChange(e)} id="diets" required>
            <option>Select one or more diets</option>
            {diets &&
              diets.title.map((el, idx) => <option key={idx}>{el}</option>)}
          </select>
          {errors.diets && <div className="errors-message">{errors.diets}</div>}
        </div>
        <div className="diets-buttons-container">
          {data.diets &&
            data.diets.map((el, i,idx) => (
              <div className="diets-button-a">
                <div className="diets-buttons">{el}</div>
                <button
                  key={idx}
                  className="close-diets-button"
                  onClick={() => filterDiet(i)}
                >
                  X
                </button>
              </div>
            ))}
        </div>
        <p className="block">
          <label htmlFor="summary">Summary</label>
          <textarea
            rows="2"
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
          <label htmlFor="instructions">Instructions</label>
          <textarea
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
            onClick={toggleModal}
            className={
              errors.title ||
              errors.image ||
              errors.score ||
              errors.healthScore ||
              errors.instructions ||
              errors.diets ||
              errors.summary ||
              errors.dishTypes
                ? "disabled"
                : "button-form"
            }
            disabled={
              errors.title ||
              errors.image ||
              errors.score ||
              errors.healthScore ||
              errors.instructions ||
              errors.diets ||
              errors.summary ||
              errors.dishTypes
                ? true
                : false
            }
          >
            {" "}
            Create
          </button>
        </p>
        <Modal modal={modal} toggleModal={toggleModal} />
      </form>
    </>
  );
};
