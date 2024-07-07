import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  console.log(props, "at the Header Cart Button");
  const numberOfCartItems = cartContext.items.length;
  console.log(numberOfCartItems, "no of cart items");

  return (
    <button className={classes.btn} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span> Cart</span>

      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
