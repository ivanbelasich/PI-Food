import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";

export function getRecipes() {
  return (dispatch) => {
    axios.get("http://localhost:3001/recipes").then((res) => {
      dispatch({ type: GET_RECIPES, payload: res.data });
    });
  };
}
