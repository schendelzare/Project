import React from "react";
import { useRouteError } from "react-router-dom";
import classes from "./index.module.css";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      <p>{message}</p>
      <p>Error: {error.status}</p>
    </div>
  );
}

export default ErrorPage;
