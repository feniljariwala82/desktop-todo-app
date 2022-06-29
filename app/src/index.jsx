import React from "react";
import "./app.css";
import Root from "Core/root";
import { Suspense } from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Suspense fallback="loading">
    <Root />
  </Suspense>,
  document.getElementById("target")
);
