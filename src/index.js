import React from "react";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import CSS from "../markup/css/main.min.css";
import CSSBorder from "../markup/css/border.css";
import rootReducer from "./store/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {
  fetchMoviesList,
  fetchPromoMovie,
  checkAuth,
} from "./store/api-actions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

Promise.all([
  store.dispatch(fetchMoviesList()),
])
  .then(() => {
    store.dispatch(fetchPromoMovie());
  })
  .then(() => {
    store.dispatch(checkAuth());
  })
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
    );
  });
