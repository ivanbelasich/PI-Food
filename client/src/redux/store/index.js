import { createStore, applyMiddleware, compose } from "redux"; // importo el applymiddleware para usar thunk.
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// thunk es un middleware que nos permite usas actions asincronas.
export default store;
