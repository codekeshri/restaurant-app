import React from "react";
import { MealItemForm } from "./MealItemForm";
import classes from "./MealItem.module.css";

export const MealItem = (props) => {
  props = props.meal;
  console.log(props.meal);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
