import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const HeaderCartButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span> Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
