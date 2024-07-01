import React from "react";
import classes from './Header.module.css'

export const HeaderCartButton = () => {
  return (
    <button className={classes.btn}>
      <span className="cil-energy icon icon-xxl"></span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
