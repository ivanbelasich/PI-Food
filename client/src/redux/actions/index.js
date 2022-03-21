import axios from "axios";
import { LOCALHOST_URL } from "../constants";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_DETAIL = "GET_RECIPES_DETAIL";
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME";
export const ADD_RECIPE = "ADD_RECIPE";
export const RESET_DETAIL = "RESET_DETAIL";
export const GET_DIETS = "GET_DIETS";
export const RESET_SEARCH = "RESET_SEARCH";
export const ORDERBYAZ = "ORDERBYAZ";
export const ORDERBYZA = "ORDERBYZA";
export const ORDERBYSCORE = "ORDERBYSCORE";
export const ORDERBYSCOREDESC = "ORDERBYSCOREDESC";
export const FILTERBYDIETS = "FILTERBYDIETS";

/////////////       RECIPES       //////////////

export function getRecipes() {
  return async (dispatch) => {
    try {
      const recipes = await axios.get(`${LOCALHOST_URL}/recipes`);
      return dispatch({
        type: GET_RECIPES,
        payload: recipes.data,
      });
    } catch (error) {
      console.log(error, "getRecipes ||Error||");
    }
  };
}

export function getRecipesDetail(id) {
  return async (dispatch) => {
    try {
      const recipesDetail = await axios.get(`${LOCALHOST_URL}/recipes/${id}`);
      return dispatch({
        type: GET_RECIPES_DETAIL,
        payload: recipesDetail.data,
      });
    } catch (error) {
      console.log(error, "getRecipesDetail ||Error||");
    }
  };
}

export function addRecipe() {
  return async (dispatch) => {
    try {
      const addRecipe = await axios.post(`${LOCALHOST_URL}/recipe`);
      return dispatch({
        type: ADD_RECIPE,
        payload: addRecipe,
      });
    } catch (error) {
      console.log(error, "addRecipe ||Error||");
    }
  };
}

export function getRecipesByName(title) {
  return async (dispatch) => {
    try {
      const getRecipeName = await axios.get(
        `${LOCALHOST_URL}/recipes?name=${title}`
      );
      dispatch({
        type: GET_RECIPE_BY_NAME,
        payload: getRecipeName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/////////////       RESET       //////////////

export function resetDetail() {
  return { type: RESET_DETAIL };
}

export function resetSearch() {
  return { type: RESET_SEARCH };
}

/////////////       DIETS       //////////////

export function getDiets() {
  return async (dispatch) => {
    try {
      const diets = await axios.get(`${LOCALHOST_URL}/types`);
      return dispatch({
        type: GET_DIETS,
        payload: diets.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

/////////////       ORDERING       //////////////

export function orderByAz() {
  return {
    type: ORDERBYAZ,
  };
}

export function orderByZa() {
  return {
    type: ORDERBYZA,
  };
}

export function orderByScore() {
  return {
    type: ORDERBYSCORE,
  };
}

export function orderByScoreDesc() {
  return {
    type: ORDERBYSCOREDESC,
  };
}

/////////////       FILTERS       //////////////

export function filterByDiets(diets) {
  return {
    type: FILTERBYDIETS,
    payload: diets,
  };
}
