import {
  GET_RECIPES,
  GET_RECIPES_DETAIL,
  GET_RECIPE_BY_NAME,
  RESET_DETAIL,
  GET_DIETS,
} from "../actions";

const initialState = {
  recipes: [],
  recipeDetail: null,
  diets: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };
    case GET_RECIPES_DETAIL:
      return {
        ...state,
        recipeDetail: payload,
      };
    case GET_RECIPE_BY_NAME: {
      return {
        ...state,
        recipes: payload,
      };
    }
    case RESET_DETAIL: {
      return {
        ...state,
        recipeDetail: null,
      };
    }
    case GET_DIETS: {
      return {
        ...state,
        diets: payload,
      };
    }
    default:
      return state;
  }
}
