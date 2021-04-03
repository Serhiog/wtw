import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Provider } from "react-redux";

console.log('hello');
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
