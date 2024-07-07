import "./Header.module.css";
import { Fragment } from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SWIGGY</h1>
      </header>
    </Fragment>
  );
};
