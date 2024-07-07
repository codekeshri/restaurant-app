import React from "react";
import { MealItemForm } from "./MealItemForm";
import classes from "./MealItem.module.css";

export const MealItem = (props) => {
  const meal = props.meal;
  return (
    <div className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} items={props} />
      </div>
    </div>
  );
};
