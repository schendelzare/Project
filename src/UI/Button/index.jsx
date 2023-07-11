import React from "react";
import classes from "./index.module.css";

const Button = (props) => {
  return (
    <div className={classes.container}>
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
