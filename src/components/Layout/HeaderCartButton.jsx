import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfCartItems = cartContext.items.reduce((n, item) => {
    return n + item.quantity;
  }, 0);

  return (
    <button className={classes.btn} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCartShopping} />
      <span> Cart</span>

      <span className={classes.badge}>{numberOfCartItems.toString()}</span>
    </button>
  );
};
