import React, { useState, useContext } from "react";
import classes from "./Cart.module.css";
import { Modal } from "./Modal";
import { HeaderCartButton } from "../Layout/HeaderCartButton";
import CartContext from "../store/cart-context";

export const Cart = (props) => {
  console.log("cart-items", props.items);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const cart = useContext(CartContext);
  const totalAmount = `$${cart.totalAmout.toFixed(2)}`;
  const hasItems = cart.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cart.items.map((item) => {
        return <li key={Math.random()}>{item.name}</li>;
      })}
    </ul>
  );

  const openModalHandler = () => {
    setIsModelOpen(true);
  };

  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  return (
    <>
      <HeaderCartButton onClick={openModalHandler} />
      {isModelOpen && (
        <Modal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button-alt"]}
              onClick={closeModalHandler}
            >
              Close
            </button>
            {hasItems && (
              <button className={classes.button} onClick={openModalHandler}>
                Order
              </button>
            )}
          </div>
        </Modal>
      )}
    </>
  );
};
