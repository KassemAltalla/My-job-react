import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";

import { RouterProvider } from "react-router-dom";
import router from "Router/Router";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Router from "Router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
