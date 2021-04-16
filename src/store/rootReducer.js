import {combineReducers} from "redux";
import {moviesReducer} from "./moviesReducer/moviesReducer";

export default combineReducers({
  movies: moviesReducer,
});
