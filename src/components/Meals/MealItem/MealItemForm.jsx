import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";

export const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const addItemToCart = (event) => {
    event.preventDefault();
    console.log("button working");
  };

  return (
    <form className={classes.meal} onSubmit={addItemToCart}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          disabled: false,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
