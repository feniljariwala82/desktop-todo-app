import React from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import Root from "core/root";
import { Suspense } from "react";
import store from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("target");

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);
