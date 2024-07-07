import React, { useContext, useRef } from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";
import CartContext from "../../store/cart-context";

export const MealItemForm = (props) => {
  const cart = useContext(CartContext);
  const ref = useRef();

  const addItemToCart = (event) => {
    event.preventDefault();
    // CartContext.addItem(props.item);
    cart.items.push(props);
    console.log(cart.items);
  };

  const inputHandler = (event) => {
    console.log("ok", event.target.value);
  };

  return (
    <form className={classes.meal} onSubmit={addItemToCart}>
      <Input
        label="Amount"
        ref={ref}
        input={{
          type: "number",
          id: "amount" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
          // value: numberOfCartItems,
          onChange: inputHandler,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
