import React, { Fragment } from "react";
import "./root.css";
import Navbar from "partials/Navbar";

const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <h2 className="is-size-4">Hey it yeah</h2>
    </Fragment>
  );
};

export default Root;
