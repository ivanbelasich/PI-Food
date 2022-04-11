import {
  GET_RECIPES,
  GET_RECIPES_DETAIL,
  GET_RECIPE_BY_NAME,
  RESET_DETAIL,
  GET_DIETS,
  ORDERBYAZ,
  ORDERBYZA,
  ORDERBYSCORE,
  ORDERBYSCOREDESC,
  FILTERBYDIETS,
  RESET_SEARCH,
} from "../actions";

const initialState = {
  recipes: [],
  recipeDetail: null,
  diets: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  // destructurin de type y payload
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
    case RESET_SEARCH: {
      return {
        ...state,
        recipes: payload,
      };
    }
    case GET_DIETS: {
      return {
        ...state,
        diets: payload,
      };
    }
    case ORDERBYAZ:
      let sortedTitleAsc;
      if (state.recipes) {
        sortedTitleAsc = state.recipes.sort((a, b) =>
          a.title > b.title ? 1 : -1
        );
      }
      return {
        ...state,
        recipes: [...sortedTitleAsc],
      };
    case ORDERBYZA:
      let sortedTitleDesc;
      if (state.recipes) {
        sortedTitleDesc = state.recipes.sort((a, b) =>
          a.title < b.title ? 1 : 0
        );
      }
      return {
        ...state,
        recipes: [...sortedTitleDesc],
      };
    case ORDERBYSCORE:
      let sortedScore;
      if (state.recipes) {
        sortedScore = state.recipes.sort((a, b) =>
          a.score <= b.score ? 1 : -1
        );
      }
      return {
        ...state,
        recipes: [...sortedScore],
      };
    case ORDERBYSCOREDESC:
      let sortedScoreAsc;
      if (state.recipes) {
        sortedScoreAsc = state.recipes.sort((a, b) =>
          a.score >= b.score ? 1 : -1
        );
      }
      return {
        ...state,
        recipes: [...sortedScoreAsc],
      };
    case FILTERBYDIETS:
      const datita = state.recipes.filter(
        (el) => (el.diets && el.diets.includes(payload[0]) === true) || (el.diet && el.diet.includes(payload[0]) === true)
      );
      return {
        ...state,
        recipes: [...datita],
      };
    default:
      return state;
  }
}
