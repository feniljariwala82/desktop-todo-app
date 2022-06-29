import React from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import Root from "core/root";
import { Suspense } from "react";

const container = document.getElementById("target");

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Suspense fallback="loading">
    <Root />
  </Suspense>
);
