import React, { useState } from "react";
import classes from "./Cart.module.css";
import { Modal } from "./Modal";
import { HeaderCartButton } from "../Layout/HeaderCartButton";

export const Cart = (props) => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
        {
          id: "c2",
          name: "Mushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const openModalHandler = () => {
    setIsModelOpen(true);
  };

  const closeModalHandler = () => {
    console.log("close the modal");
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
            <span>35.45</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button-alt"]}
              onClick={closeModalHandler}
            >
              Close
            </button>
            <button className={classes.button} onClick={openModalHandler}>
              Order
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};
