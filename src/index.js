import "bootstrap/dist/css/bootstrap.min.css";
import "css/index.module.css";



import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import configureStore from "store/configureStore";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

String.prototype.format = function () {
  let i = 0;
  const args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] !== "undefined" ? args[i++] : "";
  });
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
