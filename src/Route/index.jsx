import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../navbar";
import classes from "./index.module.css";

const RouteLayout = () => {
  return (
    <div className={classes.container}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RouteLayout;
